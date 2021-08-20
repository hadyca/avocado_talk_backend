import client from "../client";

export default {
  CompanyPost: {
    company: ({ companyId }) => {
      return client.company.findUnique({
        where: { id: companyId },
      });
    },
    totalCompanyPostLikes: ({ id }) => {
      return client.companyPostLike.count({ where: { companyPostId: id } });
    },
  },
};
