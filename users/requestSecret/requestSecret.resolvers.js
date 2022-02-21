import { generateSecret, sendSecretMail } from "../../utils";
import { cache } from "../../cache";

export default {
  Mutation: {
    requestSecret: async (_, { email }) => {
      try {
        const loginSecret = generateSecret(111111, 999999);
        await sendSecretMail(email, loginSecret);

        cache.set(email, loginSecret);
        return {
          ok: true,
        };
      } catch (e) {
        return e;
      }
    },
  },
};
