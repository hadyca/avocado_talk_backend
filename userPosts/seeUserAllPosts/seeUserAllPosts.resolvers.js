import client from "../../client";

export default {
  Query: {
    seeUserAllPosts: (_, { userId }) =>
      client.userPost.findMany({ where: { userId } }),
  },
};
