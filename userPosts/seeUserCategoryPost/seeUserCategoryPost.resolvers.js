import client from "../../client";

export default {
  Query: {
    seeUserCategoryPost: (_, { category, offset }) =>
      client.userPost.findMany({
        where: { category },
        take: 5,
        skip: offset,
        orderBy: {
          createdAt: "desc",
        },
      }),
  },
};
