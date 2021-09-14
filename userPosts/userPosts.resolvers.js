import client from "../client";

export default {
  UserPost: {
    user: ({ userId }) => {
      return client.user.findUnique({
        where: { id: userId },
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
  },
};
