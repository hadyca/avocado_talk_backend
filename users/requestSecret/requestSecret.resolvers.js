import client from "../../client";
import { generateSecret, sendSecretMail } from "../../utils";

export default {
  Mutation: {
    requestSecret: async (_, { email }) => {
      const loginSecret = generateSecret(111111, 999999);
      await sendSecretMail(email, loginSecret);

      const user = await client.user.update({
        where: { email },
        data: { loginSecret, authCode: 2 },
      });

      if (user.id) {
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
