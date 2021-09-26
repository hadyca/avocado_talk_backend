import client from "../../client";

import { deleteFile, uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editUserPost: protectedResolver(
      async (_, { userPostId, fileUrl, title, content }, { loggedInUser }) => {
        const oldPost = await client.userPost.findFirst({
          where: {
            id: userPostId,
            userId: loggedInUser.id,
          },
          select: {
            file: true,
          },
        });
        if (!oldPost) {
          return {
            ok: false,
            error: "게시글을 찾을 수 없습니다.",
          };
        }
        if (fileUrl) {
          await client.file.deleteMany({
            where: {
              userPostId,
            },
          });
          oldPost.file.forEach(
            async (value) => await deleteFile(value.fileKey)
          );
          await fileUrl.forEach(async (value) => {
            const awsFileUrl = await uploadToS3(
              value,
              loggedInUser.id,
              "userPost"
            );
            await client.userPost.update({
              where: {
                id: userPostId,
              },
              data: {
                title,
                content,
              },
            });
            await client.file.create({
              data: {
                fileUrl: awsFileUrl.Location,
                fileKey: awsFileUrl.Key,
                userPost: {
                  connect: {
                    id: userPostId,
                  },
                },
              },
            });
          });
          return {
            ok: true,
          };
        } else {
          await client.userPost.update({
            where: {
              id: userPostId,
            },
            data: {
              title,
              content,
            },
          });
          return {
            ok: true,
          };
        }
      }
    ),
  },
};
