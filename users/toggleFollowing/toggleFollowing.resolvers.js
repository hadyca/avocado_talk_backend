import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    toggleFollowing: protectedResolver(
      async (_, { userId }, { loggedInUser }) => {
        try {
          const existingUser = await client.user.findUnique({
            where: {
              id: userId,
            },
          });
          if (!existingUser) {
            throw new Error("존재 하지 않는 유저 입니다.");
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
            const updatedUser = await client.user.update({
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
            return updatedUser;
          } else {
            const updatedUser = await client.user.update({
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
            return updatedUser;
          }
        } catch (e) {
          console.log(e);
        }
      }
    ),
  },
};
