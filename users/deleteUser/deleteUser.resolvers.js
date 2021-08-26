import client from "../../client";

export default {
  Mutation: {
    deleteUser: async (_, { email }) => {
      await client.user.delete({
        where: {
          email,
        },
      });
      return {
        ok: true,
      };
    },
  },
};
