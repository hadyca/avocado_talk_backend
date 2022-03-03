import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createUserPostComment: protectedResolver(
      async (_, { userPostId, payload }, { loggedInUser }) => {
        const ok = await client.userPost.findUnique({
          where: {
            id: userPostId,
          },
          select: {
            id: true,
          },
        });
        if (!ok) {
          throw new Error("존재 하지 않는 코멘트 입니다.");
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
        return newComment;
      }
    ),
  },
};
