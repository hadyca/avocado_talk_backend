import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    companyPostCommentReport: protectedResolver(
      async (_, { companyPostCommentId, reason }, { loggedInUser }) => {
        const ok = await client.companyPostComment.findUnique({
          where: {
            id: companyPostCommentId,
          },
          select: {
            id: true,
          },
        });
        if (!ok) {
          return {
            ok: false,
            error: "코멘트를 찾을 수 없습니다.",
          };
        }

        const newReport = await client.companyPostCommentReport.create({
          data: {
            reason,
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

        return {
          ok: true,
          id: newReport.id,
        };
      }
    ),
  },
};
