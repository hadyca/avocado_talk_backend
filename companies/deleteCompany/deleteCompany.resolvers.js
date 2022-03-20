import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteCompany: protectedResolver(
      async (_, { userId }, { loggedInUser }) => {
        try {
          if (userId !== loggedInUser.id) {
            return {
              ok: false,
              error: "본인 회사가 아닙니다.",
            };
          }
          const existingCompany = await client.company.findUnique({
            where: {
              userId,
            },
          });
          if (!existingCompany) {
            return {
              ok: false,
              error: "존재 하지 않는 회사입니다.",
            };
          }
          await client.company.delete({
            where: {
              userId: loggedInUser.id,
            },
          });
          return {
            ok: true,
          };
        } catch (error) {
          return error;
        }
      }
    ),
  },
};
