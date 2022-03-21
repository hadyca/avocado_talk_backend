import client from "../../client";

export default {
  Query: {
    seeCompanyPostByDistrict: (_, { addressStep2, offset }) =>
      client.companyPost.findMany({
        where: {
          company: {
            addressStep2,
          },
        },
        take: 5,
        skip: offset,
        orderBy: {
          createdAt: "desc",
        },
      }),
  },
};
