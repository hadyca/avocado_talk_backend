import client from "../../client";

export default {
  Query: {
    searchCompanyPosts: (_, { addressStep2, sector }) =>
      client.companyPost.findMany({
        where: {
          OR: [
            {
              company: {
                addressStep2,
              },
              sector,
            },
          ],
        },
      }),
  },
};
