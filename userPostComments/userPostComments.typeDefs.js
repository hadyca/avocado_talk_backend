import { gql } from "apollo-server";

export default gql`
  type UserPostComment {
    id: String!
    user: User!
    userPost: UserPost!
    payload: String!
    isMine: Boolean!
    userPostReComments: [UserPostReComment]
    createdAt: String!
    updatedAt: String!
    deleted: Boolean!
  }
`;
