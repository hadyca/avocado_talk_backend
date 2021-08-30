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

      // setTimeout(() => {
      //   // 만약 받아온 authCode값이 기존 user 의 auth값과 동일하면 삭제
      //   if(authCode )
      // }, 10000);

      // if (user.authCode > 5) {
      //   return {
      //     ok: false,
      //     error: "요청 횟수를 초과 하였습니다. 다시 회원 가입 해주세요.",
      //   };
      // }
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
