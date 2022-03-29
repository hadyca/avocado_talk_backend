import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    toggleFavoriteCompanyPost: protectedResolver(
      async (_, { companyPostId }, { loggedInUser }) => {
        const post = await client.companyPost.findUnique({
          where: {
            id: companyPostId,
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
            favoriteCompanyPosts: {
              some: { id: companyPostId },
            },
          },
        });

        if (user) {
          await client.user.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              favoriteCompanyPosts: {
                disconnect: {
                  id: companyPostId,
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
              favoriteCompanyPosts: {
                connect: {
                  id: companyPostId,
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
