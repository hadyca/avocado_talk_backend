import client from "../../client";
import { generateSecret, sendSecretMail } from "../../utils";

export default {
  Mutation: {
    requestSecret: async (_, { email }) => {
      const loginSecret = generateSecret(111111, 999999);
      await sendSecretMail(email, loginSecret);
      let updateProceedState = null; //최초 값 1 (아직 재요청 전 상태)
      //유저 찾고
      const user = await client.user.findUnique({
        where: { email },
      });

      updateProceedState = user.proceedState; //현재 유저 상태 코드 (최초 상태 1)

      const updatedUser = await client.user.update({
        where: { email },
        data: { loginSecret, proceedState: user.proceedState + 1 },
      });

      console.log(updateProceedState, updatedUser.proceedState); //1, 2
      setTimeout(async () => {
        if (user.proceedState === updateProceedState) {
          await client.user.delete({
            where: {
              id: user.id,
            },
          });
        }
      }, 10 * 1000);

      if (user.proceedState > 5) {
        return {
          ok: false,
          error: "요청 횟수를 초과 하였습니다. 다시 회원 가입 해주세요.",
        };
      }
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
