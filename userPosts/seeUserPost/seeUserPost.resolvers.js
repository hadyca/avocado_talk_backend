import client from "../../client";

export default {
  Query: {
    seeUserPost: async (_, { userPostId }) => {
      try {
        const existingPost = await client.userPost.findUnique({
          where: { id: userPostId },
        });
        if (!existingPost) {
          throw new Error("게시글이 없거나, 삭제 되었습니다.");
        } else {
          return existingPost;
        }
      } catch (error) {
        return error;
      }
    },
  },
};
