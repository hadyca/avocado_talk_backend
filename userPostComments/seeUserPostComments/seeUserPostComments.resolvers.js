import client from "../../client";

export default {
  Query: {
    seeUserPostComments: (_, { userPostId }) =>
      client.userPostComment.findMany({
        where: { userPostId },
        orderBy: {
          createdAt: "desc",
        },
        include: { user: true },
      }),
  },
};
