import client from "../../client";

export default {
  Query: {
    seeProfile: (_, { userId }) =>
      client.user.findUnique({
        where: { id: userId },
      }),
  },
};
