import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    reportProblem: protectedResolver(
      async (_, { id, reason }, { loggedInUser }) => {
        if(id === "userPostId")
        const ok1 = await client.userPost.findUnique({
          where: {
            id: userPostId,
          },
          select: {
            id: true,
          },
        });

        if (!ok) {
          return {
            ok: false,
            error: "게시글을 찾을 수 없습니다.",
          };
        }

        const newComment = await client.userPostComment.create({
          data: {
            payload,
            userPost: {
              connect: {
                id: userPostId,
              },
            },
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
        return {
          ok: true,
          id: newComment.id,
        };
      }
    ),
  },
};
