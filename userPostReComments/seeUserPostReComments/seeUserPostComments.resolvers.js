import client from "../../client";

export default {
  Query: {
    seeUserPostReComments: (_, { userPostCommentId }) =>
      client.userPostReComment.findMany({
        where: { userPostCommentId },
        orderBy: {
          createdAt: "desc",
        },
        include: { user: true },
      }),
  },
};
