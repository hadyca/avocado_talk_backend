import bcrypt from "bcrypt";
import client from "../../client";

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
        await client.user.create({
          data: {
            username,
            email,
            password: uglyPassword,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return e;
      }
    },
  },
};
