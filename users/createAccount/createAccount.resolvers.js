import bcrypt from "bcrypt";
import client from "../../client";
import { generateSecret, sendSecretMail } from "../../utils";

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
        const uglyPassword = await bcrypt.hash(password, 10);
        const loginSecret = generateSecret(111111, 999999);
        await sendSecretMail(email, loginSecret);
        const newUser = await client.user.create({
          data: {
            username,
            email,
            password: uglyPassword,
            loginSecret,
            authCode: 1,
          },
        });
        setTimeout(async () => {
          if (newUser.authCode === 1) {
            await client.user.delete({
              where: {
                id: newUser.id,
              },
            });
          }
        }, 300000);
        return {
          ok: true,
        };
      } catch (e) {
        return e;
      }
    },
  },
};
