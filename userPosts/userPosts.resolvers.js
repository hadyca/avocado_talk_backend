import client from "../client";

export default {
  UserPost: {
    user: ({ userId }) => {
      return client.user.findUnique({
        where: { id: userId },
      });
    },
    userPostComments: ({ id }) => {
      return client.userPostComment.findMany({
        where: { userPostId: id },
      });
    },
    totalUserPostLikes: ({ id }) => {
      return client.userPostLike.count({ where: { userPostId: id } });
    },
    isMine: ({ userId }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return userId === loggedInUser.id;
    },
    isLiked: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const ok = await client.userPostLike.findUnique({
        where: {
          userId_userPostId: {
            userPostId: id,
            userId: loggedInUser.id,
          },
        },
        select: {
          id: true,
        },
      });
      if (ok) {
        return true;
      }
      return false;
    },
  },
};
