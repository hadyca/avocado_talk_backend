import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createCompanyPostComment: protectedResolver(
      async (_, { companyPostId, payload }, { loggedInUser }) => {
        const ok = await client.companyPost.findUnique({
          where: {
            id: companyPostId,
          },
          select: {
            id: true,
          },
        });
        if (!ok) {
          return {
            ok: false,
            error: "게시글을 찾을 수 없습니다.",
          };
        }

        const newComment = await client.companyPostComment.create({
          data: {
            payload,
            companyPost: {
              connect: {
                id: companyPostId,
              },
            },
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
        return {
          ok: true,
          id: newComment.id,
        };
      }
    ),
  },
};
