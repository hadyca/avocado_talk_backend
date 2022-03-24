import client from "../../client";

export default {
  Query: {
    seeAllCompanyPosts: () => client.companyPost.findMany(),
  },
};
