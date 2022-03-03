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
          throw new Error("존재 하지 않는 코멘트 입니다.");
        } else {
          return existingComment;
        }
      } catch (error) {
        return error;
      }
    },
  },
};
