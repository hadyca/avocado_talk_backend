import client from "../../client";
import { generateSecret, sendSecretMail } from "../../utils";

export default {
  Mutation: {
    requestSecret: async (_, { email }) => {
      const loginSecret = generateSecret(111111, 999999);
      await sendSecretMail(email, loginSecret);
      const updatedUser = await client.user.update({
        where: { email },
        data: { loginSecret },
      });
      if (updatedUser.id) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
        };
      }
    },
  },
};
