import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    toggleFollowing: protectedResolver(
      async (_, { companyId }, { loggedInUser }) => {
        const company = await client.company.findUnique({
          where: {
            id: companyId,
          },
        });
        if (!company) {
          return {
            ok: false,
            error: "회사를 찾을 수 없습니다.",
          };
        }
        const user = await client.user.findFirst({
          where: {
            id: loggedInUser.id,
            followings: {
              some: { id: companyId },
            },
          },
        });
        if (user) {
          await client.user.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              followings: {
                disconnect: {
                  id: companyId,
                },
              },
            },
          });
          return {
            ok: true,
          };
        } else {
          await client.user.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              followings: {
                connect: {
                  id: companyId,
                },
              },
            },
          });
          return {
            ok: true,
          };
        }
      }
    ),
  },
};
