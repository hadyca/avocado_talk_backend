import bcrypt from "bcrypt";
import client from "../../client";
import { generateSecret, sendSecretMail } from "../../utils";

export default {
  Mutation: {
    createAccount: async (_, { username, email, password }) => {
      try {
        const existingUsername = await client.user.findFirst({
          where: {
            username,
          },
        });
        if (existingUsername) {
          throw new Error("이미 사용중인 유저이름이 있습니다.");
        }
        const existingEmail = await client.user.findFirst({
          where: {
            email,
          },
        });
        if (existingEmail) {
          throw new Error("이미 사용 중인 Email주소가 있습니다.");
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
        //인증번호 안넣으면 1시간 지나면 계정이 삭제됨.
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
        }, 60 * 60 * 1000);
        return {
          ok: true,
        };
      } catch (e) {
        return e;
      }
    },
  },
};
