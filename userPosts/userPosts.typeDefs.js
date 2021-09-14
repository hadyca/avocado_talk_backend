import { gql } from "apollo-server";

export default gql`
  type UserPost {
    id: String!
    user: User!
    fileUrl: String
    fileKey: String
    title: String!
    content: String!
    totalUserPostLikes: Int!
    userPostComments: [UserPostComment]
    createdAt: String!
    updatedAt: String!
    isMine: Boolean!
  }

  type UserPostLike {
    id: String!
    userPost: UserPost!
    createdAt: String!
    updatedAt: String!
  }
`;
