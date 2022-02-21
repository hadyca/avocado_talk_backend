import client from "../../client";
import { generateSecret, sendSecretMail } from "../../utils";
import { cache } from "../../cache";

export default {
  Mutation: {
    createAccount: async (_, { email, username, password }) => {
      try {
        const existingEmail = await client.user.findFirst({
          where: {
            email,
          },
        });
        if (existingEmail) {
          return {
            ok: false,
            error:
              "이미 사용중인 이메일 주소가 있습니다. 다른 이메일 주소를 입력해주세요.",
          };
        }
        const existingUsername = await client.user.findFirst({
          where: {
            username,
          },
        });

        if (existingUsername) {
          return {
            ok: false,
            error:
              "이미 사용중인 유저명이 있습니다. 다른 유저명을 사용해 보세요!",
          };
        }

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
