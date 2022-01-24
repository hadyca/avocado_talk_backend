import client from "../../client";

export default {
  Query: {
    seeUserPostNotMineComments: (_, { userPostId }, { loggedInUser }) =>
      client.userPostComment.findMany({
        where: {
          userPostId,
          NOT: {
            userId: loggedInUser.id,
          },
        },
        include: { user: true },
      }),
  },
};
