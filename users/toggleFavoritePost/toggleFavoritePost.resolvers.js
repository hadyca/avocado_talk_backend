import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    toggleFavoritePost: protectedResolver(
      async (_, { postId }, { loggedInUser }) => {
        const post = await client.companyPost.findUnique({
          where: {
            id: postId,
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
            favoritePosts: {
              some: { id: postId },
            },
          },
        });
        if (user) {
          await client.user.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              favoritePosts: {
                disconnect: {
                  id: postId,
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
              favoritePosts: {
                connect: {
                  id: postId,
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
