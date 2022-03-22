import client from "../../client";
import { deleteFile, uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";
import { getUserCompany } from "../../companies/companies.utils";

export default {
  Mutation: {
    editCompanyPost: protectedResolver(
      async (
        _,
        { companyPostId, fileUrl, title, content },
        { loggedInUser }
      ) => {
        try {
          const userCompany = await getUserCompany(loggedInUser.id);
          const oldPost = await client.companyPost.findFirst({
            where: {
              id: companyPostId,
              companyId: userCompany.id,
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
                companyPostId,
              },
            });
            oldPost.file.forEach(
              async (value) => await deleteFile(value.fileKey)
            );
            for (let value of fileUrl) {
              const awsFileUrl = await uploadToS3(
                value,
                loggedInUser.id,
                "companyPost"
              );
              await client.file.create({
                data: {
                  fileUrl: awsFileUrl.Location,
                  fileKey: awsFileUrl.Key,
                  companyPost: {
                    connect: {
                      id: companyPostId,
                    },
                  },
                },
              });
            }
            const newPost = await client.companyPost.update({
              where: {
                id: companyPostId,
              },
              data: {
                title,
                content,
              },
            });
            return {
              ok: true,
              id: newPost.id,
            };
          }
        } catch (error) {
          return error;
        }
      }
    ),
  },
};
