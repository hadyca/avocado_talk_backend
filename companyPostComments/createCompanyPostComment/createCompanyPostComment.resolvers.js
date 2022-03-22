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
          throw new Error("존재 하지 않는 코멘트 입니다.");
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
        return newComment;
      }
    ),
  },
};
