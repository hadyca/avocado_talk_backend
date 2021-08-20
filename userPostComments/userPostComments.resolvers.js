export default {
    UserPostComment: {
      isMine: ({ userId }, _, { loggedInUser }) => {
        if (!loggedInUser) {
          return false;
        }
        return userId === loggedInUser.id;
      },
    },
  };
  