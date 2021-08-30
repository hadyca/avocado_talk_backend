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
<<<<<<< HEAD
=======
        if (existingEmail) {
          return {
            ok: false,
            error:
              "이미 사용중인 이메일 주소가 있습니다. 다른 이메일 주소를 입력해주세요.",
          };
        }
>>>>>>> c8b8d39d38329ae73ff9ccc6d309f2a699b8e05b
        const existingUsername = await client.user.findFirst({
          where: {
            username,
          },
        });
<<<<<<< HEAD
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
=======

        if (existingUsername) {
          return {
            ok: false,
            error:
              "이미 사용중인 유저명이 있습니다. 다른 유저명을 사용해보세요!",
>>>>>>> c8b8d39d38329ae73ff9ccc6d309f2a699b8e05b
          };
        }
        const uglyPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            username,
            email,
            password: uglyPassword,
          },
        });

        //인증번호 요청 로직
        const loginSecret = generateSecret(111111, 999999);
        await sendSecretMail(email, loginSecret);
        await client.user.update({
          where: { email },
          data: { loginSecret, proceedState: 1 },
        });
        //인증번호 안넣고 10분 지나면 계정이 삭제됨.
        setTimeout(async () => {
          const newUser = await client.user.findUnique({
            where: {
              email,
            },
          });
          if (newUser.proceedState === 1) {
            await client.user.delete({
              where: {
                id: newUser.id,
              },
            });
          }
<<<<<<< HEAD
        }, 60 * 10 * 1000);
=======
        }, 10 * 1000);
>>>>>>> c8b8d39d38329ae73ff9ccc6d309f2a699b8e05b
        return {
          ok: true,
        };
      } catch (e) {
        return e;
      }
    },
  },
};
