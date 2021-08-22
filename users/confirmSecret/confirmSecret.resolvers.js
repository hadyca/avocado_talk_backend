import client from "../../client";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    confirmSecret: async (_, { email, secret }) => {
      const user = await client.user.findFirst({
        where: { email },
      });
      if (user.loginSecret === secret) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        return {
          ok: true,
          token,
        };
      } else {
        return {
          ok: false,
          error: "시크릿 번호가 일치 하지 않아요",
        };
      }
    },
  },
};
