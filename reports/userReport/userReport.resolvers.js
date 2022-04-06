import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    userReport: protectedResolver(
      async (_, { userId, reason }, { loggedInUser }) => {
        const ok = await client.user.findUnique({
          where: {
            id: userId,
          },
          select: {
            id: true,
          },
        });
        if (!ok) {
          return {
            ok: false,
            error: "유저를 찾을 수 없습니다.",
          };
        }

        const newReport = await client.userReport.create({
          data: {
            reason,
            FromUser: {
              connect: {
                id: loggedInUser.id,
              },
            },
            ToUser: {
              connect: {
                id: userId,
              },
            },
          },
        });

        return {
          ok: true,
          id: newReport.id,
        };
      }
    ),
  },
};
