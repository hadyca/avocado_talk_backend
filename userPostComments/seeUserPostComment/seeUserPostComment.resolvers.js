import client from "../../client";

export default {
  Query: {
    seeUserPostComment: async (_, { userPostCommentId }) => {
      try {
        const existingComment = await client.userPostComment.findUnique({
          where: { id: userPostCommentId },
          include: { user: true },
        });
        if (!existingComment) {
          throw new Error("코멘트가 삭제 되었습니다.");
        } else {
          return existingComment;
        }
      } catch (error) {
        return error;
      }
    },
  },
};
