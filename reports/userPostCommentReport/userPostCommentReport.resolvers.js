import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    userPostCommentReport: protectedResolver(
      async (_, { userPostCommentId, reason }, { loggedInUser }) => {
        const ok = await client.userPostComment.findUnique({
          where: {
            id: userPostCommentId,
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

        const newReport = await client.userPostCommentReport.create({
          data: {
            reason,
            userPostComment: {
              connect: {
                id: userPostCommentId,
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
