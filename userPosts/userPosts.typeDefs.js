import { gql } from "apollo-server";

export default gql`
  type UserPost {
    id: String!
    user: User!
    file: [File]
    title: String!
    content: String!
    totalUserPostLikes: Int!
    totalUserPostComments: Int!
    userPostComments: [UserPostComment]
    createdAt: String!
    updatedAt: String!
    isMine: Boolean!
    isLiked: Boolean!
  }

  type UserPostLike {
    id: String!
    userPost: UserPost!
    createdAt: String!
    updatedAt: String!
  }

  type File {
    id: String!
    fileUrl: String!
    fileKey: String!
  }
`;
