import client from "../../client";

export default {
  Query: {
    seeAllCompanyPosts: (_, { offset }) =>
      client.companyPost.findMany({
        take: 10,
        skip: offset,
        orderBy: {
          createdAt: "desc",
        },
      }),
  },
};
