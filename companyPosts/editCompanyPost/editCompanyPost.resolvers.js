import client from "../../client";
import { getUserCompany } from "../../companies/companies.utils";
import { deleteFile, uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editCompanyPost: protectedResolver(
      async (
        _,
        { companyPostId, fileUrl, title, content },
        { loggedInUser }
      ) => {
        const userCompany = await getUserCompany(loggedInUser.id);
        const oldPost = await client.companyPost.findFirst({
          where: {
            id: companyPostId,
            companyId: userCompany.id,
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
            "companyPost"
          );
        }

        await client.companyPost.update({
          where: {
            id: companyPostId,
          },
          data: {
            title,
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
