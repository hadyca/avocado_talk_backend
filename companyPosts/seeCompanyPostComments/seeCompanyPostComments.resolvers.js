import client from "../../client";

export default {
  Query: {
    seeCompanyPostComments: (_, { companyPostId }) =>
      client.companyPostComment.findMany({
        where: { companyPostId },
        orderBy: {
          createdAt: "desc",
        },
        include: { user: true },
      }),
  },
};
