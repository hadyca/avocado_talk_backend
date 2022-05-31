import client from "../../client";

export default {
  Query: {
    seeUserCategoryPost: (_, { category, offset }) =>
      client.userPost.findMany({
        where: {
          category,
          NOT: {
            deleted: true,
          },
        },
        take: 5,
        skip: offset,
        orderBy: {
          createdAt: "desc",
        },
      }),
  },
};
