import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteUserPostReComment: protectedResolver(
      async (_, { reCommentId }, { loggedInUser }) => {
        const comment = await client.userPostReComment.findFirst({
          where: {
            id: reCommentId,
            deleted: false,
          },
          select: {
            userId: true,
          },
        });
        if (!comment) {
          return {
            ok: false,
            error: "코멘트를 찾을 수 없거나, 삭제 되었습니다.",
          };
        } else if (comment.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: "권한이 없습니다.",
          };
        } else {
          await client.userPostReComment.update({
            where: {
              id: reCommentId,
            },
            data: {
              deleted: true,
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
