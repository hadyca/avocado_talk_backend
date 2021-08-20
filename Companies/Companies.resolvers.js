import client from "../client";

export default {
  Company: {
    isMyCompany: ({ id }, _, { loggedInUser }) => {
      console.log(loggedInUser);
      if (!loggedInUser) {
        return false;
      }
      if (loggedInUser.companyOwner === null) {
        return false;
      }
      return id === loggedInUser.companyOwner.id;
    },
    isFollowing: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const exists = await client.user.count({
        where: {
          username: loggedInUser.username,
          followings: { some: { id } },
        },
      });
      return Boolean(exists);
    },
    totalFollowers: ({ id }) =>
      client.user.count({
        where: {
          followings: {
            some: {
              id,
            },
          },
        },
      }),
  },
};
