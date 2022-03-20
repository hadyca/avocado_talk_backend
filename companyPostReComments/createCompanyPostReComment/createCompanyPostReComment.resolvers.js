import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createCompanyPostReComment: protectedResolver(
      async (_, { companyPostCommentId, payload }, { loggedInUser }) => {
        const ok = await client.companyPostComment.findUnique({
          where: {
            id: companyPostCommentId,
          },
          select: {
            id: true,
          },
        });
        if (!ok) {
          throw new Error("존재 하지 않는 코멘트 입니다.");
        }

        const newComment = await client.companyPostReComment.create({
          data: {
            payload,
            companyPostComment: {
              connect: {
                id: companyPostCommentId,
              },
            },
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
        return newComment;
      }
    ),
  },
};
