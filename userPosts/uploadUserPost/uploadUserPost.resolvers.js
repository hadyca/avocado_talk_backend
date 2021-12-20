import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadUserPost: protectedResolver(
      async (_, { fileUrl, title, content }, { loggedInUser }) => {
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
            // await fileUrl.forEach(async (value) => {
            //   const awsFileUrl = await uploadToS3(
            //     value,
            //     loggedInUser.id,
            //     "userPost"
            //   );  배열형식

            const awsFileUrl = await uploadToS3(
              fileUrl,
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
        } catch (e) {
          return e;
        }
      }
    ),
  },
};
