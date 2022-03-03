import client from "../../client";

export default {
  Query: {
    seeUserPost: (_, { userPostId }) => {
      try {
        return client.userPost.findUnique({
          where: { id: userPostId },
        });
      } catch (error) {
        return error;
      }
    },
  },
};
