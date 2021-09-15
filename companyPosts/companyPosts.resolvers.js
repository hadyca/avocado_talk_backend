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
    isMine: ({ companyId }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return (client.company.findUnique({ where: { id: companyId } }).userId =
        loggedInUser.id);
    },
    isLiked: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const ok = await client.companyPostLike.findUnique({
        where: {
          userId_companyPostId: {
            ompanyPostId: id,
            userId: loggedInUser.id,
          },
        },
        select: {
          id: true,
        },
      });
      if (ok) {
        return true;
      }
      return false;
    },
  },
};
