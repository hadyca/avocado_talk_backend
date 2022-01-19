import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    companyPostReCommentReport: protectedResolver(
      async (_, { companyPostReCommentId, reason }, { loggedInUser }) => {
        const ok = await client.companyPostReComment.findUnique({
          where: {
            id: companyPostReCommentId,
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

        const newReport = await client.companyPostReCommentReport.create({
          data: {
            reason,
            companyPostReComment: {
              connect: {
                id: companyPostReCommentId,
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
