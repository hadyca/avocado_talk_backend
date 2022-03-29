import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    toggleFavoriteUserPost: protectedResolver(
      async (_, { userPostId }, { loggedInUser }) => {
        const post = await client.userPost.findUnique({
          where: {
            id: userPostId,
          },
        });
        if (!post) {
          return {
            ok: false,
            error: "게시글을 찾을 수 없습니다.",
          };
        }
        const user = await client.user.findFirst({
          where: {
            id: loggedInUser.id,
            favoriteUserPosts: {
              some: { id: userPostId },
            },
          },
        });

        if (user) {
          await client.user.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              favoriteUserPosts: {
                disconnect: {
                  id: userPostId,
                },
              },
            },
          });
          return {
            ok: true,
          };
        } else {
          await client.user.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              favoriteUserPosts: {
                connect: {
                  id: userPostId,
                },
              },
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
