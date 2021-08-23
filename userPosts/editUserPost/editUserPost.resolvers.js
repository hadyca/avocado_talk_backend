import client from "../../client";

import { deleteFile, uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editUserPost: protectedResolver(
      async (_, { userPostId, fileUrl, content }, { loggedInUser }) => {
        const oldPost = await client.userPost.findFirst({
          where: {
            id: userPostId,
            userId: loggedInUser.id,
          },
        });
        if (!oldPost) {
          return {
            ok: false,
            error: "게시글을 찾을 수 없습니다.",
          };
        }
        let editedAwsFileUrl = null;
        if (fileUrl) {
          await deleteFile(oldPost.fileKey);
          editedAwsFileUrl = await uploadToS3(
            fileUrl,
            loggedInUser.id,
            "userPost"
          );
        }

        await client.userPost.update({
          where: {
            id: userPostId,
          },
          data: {
            content,
            ...(editedAwsFileUrl && {
              fileUrl: editedAwsFileUrl.Location,
              fileKey: editedAwsFileUrl.Key,
            }),
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
