import client from "../client";

export default {
  User: {
    isMe: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return id === loggedInUser.id;
    },
    totalFollowings: ({ id }) =>
      client.company.count({
        where: {
          followers: {
            some: {
              id,
            },
          },
        },
      }),
    myCompany: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return client.company.findUnique({
        where: {
          userId: id,
        },
      });
    },
  },
};
