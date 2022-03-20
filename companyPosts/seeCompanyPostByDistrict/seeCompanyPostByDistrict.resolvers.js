import client from "../../client";

export default {
  Query: {
    seeCompanyPostByDistrict: (_, { addressStep2 }) =>
      client.companyPost.findMany({
        where: {
          company: {
            addressStep2,
          },
        },
      }),
  },
};
