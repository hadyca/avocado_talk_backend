import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    toggleCompanyPostLike: protectedResolver(
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
        const likeWhere = {
          userId_companyPostId: {
            userId: loggedInUser.id,
            companyPostId,
          },
        };
        const like = await client.companyPostLike.findUnique({
          where: likeWhere,
        });
        if (like) {
          await client.companyPostLike.delete({
            where: likeWhere,
          });
          return {
            ok: true,
          };
        } else {
          await client.companyPostLike.create({
            data: {
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              companyPost: {
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
