import bcrypt from "bcrypt";
import client from "../../client";
import { generateSecret, sendSecretMail } from "../../utils";

export default {
  Mutation: {
    createAccount: async (_, { username, email, password }) => {
      try {
        const existingEmail = await client.user.findFirst({
          where: {
            email,
          },
        });
        const existingUsername = await client.user.findFirst({
          where: {
            username,
          },
        });
        if (existingEmail && existingUsername) {
          return {
            ok: false,
            error:
              "이미 사용중인 이메일 주소와 유저명이 있습니다. 이메일 주소, 유저명 모두 변경 해주세요.",
          };
        }
        if (existingEmail) {
          return {
            ok: false,
            error: "이미 사용중인 이메일 주소가 있습니다.",
          };
        }
        if (existingUsername) {
          return {
            ok: false,
            error: "이미 사용중인 유저명이 있습니다.",
          };
        }
        const uglyPassword = await bcrypt.hash(password, 10);
        const newUser = await client.user.create({
          data: {
            username,
            email,
            password: uglyPassword,
          },
        });
        const loginSecret = generateSecret(111111, 999999);
        await sendSecretMail(email, loginSecret);
        const updatedUser = await client.user.update({
          where: { email },
          data: { loginSecret },
        });
        //인증번호 안넣고 10분 지나면 계정이 삭제됨.
        setTimeout(async () => {
          const newUser = await client.user.findUnique({
            where: {
              email,
            },
          });
          if (newUser.secretConfirm === false) {
            await client.user.delete({
              where: {
                id: newUser.id,
              },
            });
          }
        }, 60 * 10 * 1000);
        return {
          ok: true,
        };
      } catch (e) {
        return e;
      }
    },
  },
};
