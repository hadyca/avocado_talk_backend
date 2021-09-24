import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadUserPost: protectedResolver(
      async (_, { fileUrl, title, content }, { loggedInUser }) => {
        if (fileUrl) {
          await fileUrl.map(async (file) => {
            let awsFileUrl = [];
            awsFileUrl = await uploadToS3(file, loggedInUser.id, "userPost");
            await client.userPost.create({
              data: {
                ...(awsFileUrl && {
                  file: {
                    create: {
                      fileUrl: awsFileUrl.Location,
                      fileKey: awsFileUrl.Key,
                    },
                  },
                }),
                title,
                content,
                user: {
                  connect: { id: loggedInUser.id },
                },
              },
            });
          });
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
          };
        }
      }
    ),
  },
};
