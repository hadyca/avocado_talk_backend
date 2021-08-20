import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    toggleUserPostLike: protectedResolver(
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
        const likeWhere = {
          userId_userPostId: {
            userId: loggedInUser.id,
            userPostId,
          },
        };
        const like = await client.userPostLike.findUnique({
          where: likeWhere,
        });
        if (like) {
          await client.userPostLike.delete({
            where: likeWhere,
          });
          return {
            ok: true,
          };
        } else {
          await client.userPostLike.create({
            data: {
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              userPost: {
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
