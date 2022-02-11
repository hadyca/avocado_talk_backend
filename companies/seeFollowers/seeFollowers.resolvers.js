import client from "../../client";

export default {
  Query: {
    seeFollowers: async (_, { companyId, lastId }) => {
      const ok = await client.company.findUnique({
        where: { id: companyId },
        select: { id: true },
      });
      if (!ok) {
        return {
          ok: false,
          error: "회사를 찾을 수 없습니다.",
        };
      }
      const followers = await client.company
        .findUnique({ where: { id: companyId } })
        .followers({
          take: 5,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }),
        });
      return {
        ok: true,
        followers,
      };
    },
  },
};
