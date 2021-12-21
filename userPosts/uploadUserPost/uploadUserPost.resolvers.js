import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadUserPost: protectedResolver(
      async (_, { fileUrl, title, content }, { loggedInUser }) => {
        console.log(fileUrl, "최초 fileUrl값");
        const test = await fileUrl;
        console.log(test);
        try {
          if (fileUrl) {
            const newPost = await client.userPost.create({
              data: {
                title,
                content,
                user: {
                  connect: {
                    id: loggedInUser.id,
                  },
                },
              },
            });
            await fileUrl.map(async (value) => {
              console.log(value, "value이다");
              const awsFileUrl = await uploadToS3(
                value,
                loggedInUser.id,
                "userPost"
              );
              console.log(awsFileUrl, "aws이다");
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
            });
            return newPost;
          } else {
            const newPost = await client.userPost.create({
              data: {
                title,
                content,
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
