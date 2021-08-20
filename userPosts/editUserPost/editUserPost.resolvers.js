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

        await deleteFile(oldPost.fileKey); //aws 파일 삭제
        const editedAwsFileUrl = await uploadToS3(
          fileUrl,
          loggedInUser.id,
          "userPost"
        );
        await client.userPost.update({
          where: {
            id: userPostId,
          },
          data: {
            fileUrl: editedAwsFileUrl.Location,
            fileKey: editedAwsFileUrl.Key,
            content,
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
