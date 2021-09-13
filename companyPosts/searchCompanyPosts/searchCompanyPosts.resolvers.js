import client from "../../client";

export default {
  Query: {
    searchCompanyPosts: (_, { addressStep2, postSector }) =>
      client.companyPost.findMany({
        where: {
          OR: [
            {
              company: {
                addressStep2,
              },
              postSector,
            },
          ],
        },
      }),
  },
};
