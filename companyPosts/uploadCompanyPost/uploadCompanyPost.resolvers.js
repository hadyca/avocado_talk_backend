import client from "../../client";
import { getUserCompany } from "../../companies/companies.utils";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadCompanyPost: protectedResolver(
      async (_, { fileUrl, title, content, postSector }, { loggedInUser }) => {
        let awsFileUrl = null;
        if (fileUrl) {
          awsFileUrl = await uploadToS3(
            fileUrl,
            loggedInUser.id,
            "companyPost"
          );
        }
        const uesrCompany = await getUserCompany(loggedInUser.id);
        return client.companyPost.create({
          data: {
            ...(awsFileUrl && {
              fileUrl: awsFileUrl.Location,
              fileKey: awsFileUrl.Key,
            }),
            title,
            content,
            postSector,
            company: {
              connect: { id: uesrCompany.id },
            },
          },
        });
      }
    ),
  },
};
