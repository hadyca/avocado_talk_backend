import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    userPostReCommentReport: protectedResolver(
      async (_, { userPostReCommentId, reason }, { loggedInUser }) => {
        const ok = await client.userPostReComment.findUnique({
          where: {
            id: userPostReCommentId,
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

        const newReport = await client.userPostReCommentReport.create({
          data: {
            reason,
            userPostReComment: {
              connect: {
                id: userPostReCommentId,
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
