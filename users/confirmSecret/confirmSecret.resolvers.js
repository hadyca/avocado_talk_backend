import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cache } from "../../cache";

export default {
  Mutation: {
    confirmSecret: async (_, { email, username, password, secret }) => {
      const uglyPassword = await bcrypt.hash(password, 10);
      const cacheLoginSecret = cache.get(email);

      if (!cacheLoginSecret) {
        return {
          ok: false,
          error: "다시 시도해 주세요.",
        };
      }

      if (cacheLoginSecret !== secret) {
        return {
          ok: false,
          error: "인증번호가 일치하지 않아요.",
        };
      }

      if (cacheLoginSecret === secret) {
        const user = await client.user.create({
          data: {
            username,
            email,
            password: uglyPassword,
          },
        });
        cache.delete(email);

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        return {
          ok: true,
          token,
        };
      }
    },
  },
};
