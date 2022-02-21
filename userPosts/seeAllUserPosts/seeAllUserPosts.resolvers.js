import client from "../../client";

export default {
  Query: {
    seeAllUserPosts: (_, { offset }) =>
      client.userPost.findMany({
        take: 5,
        skip: offset,
        orderBy: {
          createdAt: "desc",
        },
      }),
  },
};
