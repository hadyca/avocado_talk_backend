import client from "../../client";

export default {
  Query: {
    seeUserPostComment: (_, { userPostCommentId }) =>
      client.userPostComment.findUnique({
        where: { id: userPostCommentId },
        include: { user: true },
      }),
  },
};
