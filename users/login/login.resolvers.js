import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../../client";

export default {
  Mutation: {
    login: async (_, { email, password }) => {
      const user = await client.user.findFirst({ where: { email } });
      if (!user) {
        return {
          ok: false,
          error: "없는 계정 이거나, 틀린 비밀번호 입니다. 다시 확인해주세요.",
        };
      }
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "없는 계정 이거나, 틀린 비밀번호 입니다. 다시 확인해주세요.",
        };
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
