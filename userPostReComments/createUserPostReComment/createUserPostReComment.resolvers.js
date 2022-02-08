import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createUserPostReComment: protectedResolver(
      async (_, { userPostCommentId, payload }, { loggedInUser }) => {
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

        const newComment = await client.userPostReComment.create({
          data: {
            payload,
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
        return newComment;
      }
    ),
  },
};
