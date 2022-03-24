import client from "../../client";

export default {
  Query: {
    totalSectorCompanyPosts: async (_, { sector }) => {
      const countingPosts = await client.companyPost.count({
        where: {
          company: {
            sector,
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
