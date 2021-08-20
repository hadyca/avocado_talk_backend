import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadUserPost: protectedResolver(
      async (_, { fileUrl, content }, { loggedInUser }) => {
        const awsFileUrl = await uploadToS3(
          fileUrl,
          loggedInUser.id,
          "userPost"
        );

        return client.userPost.create({
          data: {
            fileUrl: awsFileUrl.Location,
            fileKey: awsFileUrl.Key,
            content,
            user: {
              connect: { id: loggedInUser.id },
            },
          },
        });
      }
    ),
  },
};
