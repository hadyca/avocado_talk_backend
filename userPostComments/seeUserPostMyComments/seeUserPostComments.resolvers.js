import client from "../../client";

export default {
  Query: {
    seeUserPostMyComments: (_, { userPostId }, { loggedInUser }) =>
      client.userPostComment.findMany({
        where: { userPostId, userId: loggedInUser.id },
        include: { user: true },
      }),
  },
};
