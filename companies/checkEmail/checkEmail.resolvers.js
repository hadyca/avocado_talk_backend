import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    checkEmail: protectedResolver(async (_, { email }) => {
      try {
        const existingEmail = await client.company.findFirst({
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
        return {
          ok: true,
        };
      } catch (e) {
        return e;
      }
    }),
  },
};
