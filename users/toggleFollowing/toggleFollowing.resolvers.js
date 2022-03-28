import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    toggleFollowing: protectedResolver(
      async (_, { userId }, { loggedInUser }) => {
        const existingUser = await client.user.findUnique({
          where: {
            id: userId,
          },
        });
        if (!existingUser) {
          return {
            ok: false,
            error: "유저를 찾을 수 없습니다.",
          };
        }
        const user = await client.user.findFirst({
          where: {
            id: loggedInUser.id,
            following: {
              some: { id: userId },
            },
          },
        });
        if (user) {
          await client.user.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              following: {
                disconnect: {
                  id: userId,
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
              following: {
                connect: {
                  id: userId,
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
