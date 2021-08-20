import client from "../../client";

export default {
  Query: {
    seeFollowings: async (_, { username, lastId }) => {
      const ok = await client.user.findUnique({
        where: { username },
        select: { id: true },
      });
      if (!ok) {
        return {
          ok: false,
          error: "유저를 찾을 수 없습니다.",
        };
      }
      const followings = await client.user
        .findUnique({ where: { username } })
        .followings({
          take: 5,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }),
        });
      return followings;
    },
  },
};
