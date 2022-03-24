import client from "../../client";

export default {
  Query: {
    totalAdd1CompanyPosts: async (_, { addressStep1 }) => {
      const countingPosts = await client.companyPost.count({
        where: {
          company: {
            addressStep1,
          },
        },
      });

      return {
        ok: true,
        totalPosts: countingPosts,
      };
    },
  },
};
