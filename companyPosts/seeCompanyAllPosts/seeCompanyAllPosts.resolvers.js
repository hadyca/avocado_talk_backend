import client from "../../client";

export default {
  Query: {
    seeCompanyAllPosts: (_, { companyId }) =>
      client.companyPost.findMany({ where: { companyId } }),
  },
};
