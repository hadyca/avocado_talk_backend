import client from "../../client";

export default {
  Query: {
    seeUserPostComments: (_, { userPostId }) =>
      client.userPostComment.findMany({
        where: { userPostId },
        include: { user: true },
      }),
  },
};
