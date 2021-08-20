import client from "../../client";

export default {
  Query: {
    seeUserPost: (_, { userPostId }) =>
      client.userPost.findUnique({ where: { id: userPostId } }),
  },
};
