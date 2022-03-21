import client from "../../client";

export default {
  Query: {
    seeCompanyPostBySector: (_, { sector, offset }) =>
      client.companyPost.findMany({
        where: {
          company: {
            sector,
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
