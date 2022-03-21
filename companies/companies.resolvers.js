import client from "../client";

export default {
  Company: {
    user: ({ userId }) => {
      return client.user.findUnique({
        where: { id: userId },
      });
    },
    isMyCompany: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      if (loggedInUser.myCompany === null) {
        return false;
      }
      return id === loggedInUser.myCompany.id;
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
