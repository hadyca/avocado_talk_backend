import client from "../../client";

export default {
  Query: {
    totalAdd2CompanyPosts: async (_, { addressStep2 }) => {
      const countingPosts = await client.companyPost.count({
        where: {
          company: {
            addressStep2,
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
