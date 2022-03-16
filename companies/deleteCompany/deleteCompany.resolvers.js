import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteCompany: protectedResolver(
      async (_, { companyId }, { loggedInUser }) => {
        try {
          const existingCompany = await client.company.findUnique({
            where: {
              userId: loggedInUser.id,
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
              id: companyId,
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
