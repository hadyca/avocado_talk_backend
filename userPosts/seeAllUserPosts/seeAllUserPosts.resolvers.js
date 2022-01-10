import client from "../../client";

export default {
  Query: {
    seeAllUserPosts: (_, { offset }) =>
      client.userPost.findMany({
        take: 15,
        skip: offset,
        orderBy: {
          createdAt: "desc",
        },
      }),
  },
};
