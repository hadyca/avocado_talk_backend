import client from "../../client";

export default {
  Query: {
    seeCompanyAllPosts: (_, { companyId, offset }) =>
      client.companyPost.findMany({
        where: {
          company: {
            id: companyId,
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
