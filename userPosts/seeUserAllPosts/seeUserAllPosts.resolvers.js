import client from "../../client";

export default {
  Query: {
    seeUserAllPosts: (_, { userId, offset }) =>
      client.userPost.findMany({
        where: { userId },
        take: 5,
        skip: offset,
        orderBy: {
          createdAt: "desc",
        },
      }),
  },
};
