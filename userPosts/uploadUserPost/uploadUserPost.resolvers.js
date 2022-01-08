import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadUserPost: protectedResolver(
      async (_, { fileUrl, title, content, category }, { loggedInUser }) => {
        const fileUrl1 = await Promise.all(fileUrl).then();
        try {
          if (fileUrl) {
            const newPost = await client.userPost.create({
              data: {
                title,
                content,
                category,
                user: {
                  connect: {
                    id: loggedInUser.id,
                  },
                },
              },
            });
            for (let value of fileUrl1) {
              const awsFileUrl = await uploadToS3(
                value,
                loggedInUser.id,
                "userPost"
              );
              await client.file.create({
                data: {
                  fileUrl: awsFileUrl.Location,
                  fileKey: awsFileUrl.Key,
                  userPost: {
                    connect: {
                      id: newPost.id,
                    },
                  },
                },
              });
            }
            return newPost;
          } else {
            const newPost = await client.userPost.create({
              data: {
                title,
                content,
                category,
                user: {
                  connect: {
                    id: loggedInUser.id,
                  },
                },
              },
            });
            return newPost;
          }
        } catch (error) {
          return error;
        }
      }
    ),
  },
};
