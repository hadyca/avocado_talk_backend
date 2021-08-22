import client from "../../client";

export default {
  Query: {
    searchCompanyPosts: (_, { addressStep2 }) =>
      client.companyPost.findMany({
        where: {
          company: {
            addressStep2,
          },
        },
      }),
  },
};
