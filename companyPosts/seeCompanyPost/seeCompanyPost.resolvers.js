import client from "../../client";

export default {
  Query: {
    seeCompanyPost: (_, { companyPostId }) =>
      client.companyPost.findUnique({ where: { id: companyPostId } }),
  },
};
