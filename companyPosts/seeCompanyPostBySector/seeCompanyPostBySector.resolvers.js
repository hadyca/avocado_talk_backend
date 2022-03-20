import client from "../../client";

export default {
  Query: {
    seeCompanyPostBySector: (_, { sector }) =>
      client.companyPost.findMany({
        where: {
          company: {
            sector,
          },
        },
      }),
  },
};
