import client from "../../client";
import { getUserCompany } from "../../companies/companies.utils";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadCompanyPost: protectedResolver(
      async (_, { fileUrl, title, content }, { loggedInUser }) => {
        const awsFileUrl = await uploadToS3(
          fileUrl,
          loggedInUser.id,
          "companyPost"
        );
        const uesrCompany = await getUserCompany(loggedInUser.id);
        return client.companyPost.create({
          data: {
            fileUrl: awsFileUrl.Location,
            fileKey: awsFileUrl.Key,
            title,
            content,
            company: {
              connect: { id: uesrCompany.id },
            },
          },
        });
      }
    ),
  },
};
