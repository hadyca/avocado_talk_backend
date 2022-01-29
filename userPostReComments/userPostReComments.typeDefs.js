import { gql } from "apollo-server";

export default gql`
  type UserPostReComment {
    id: String!
    user: User!
    payload: String!
    isMine: Boolean!
    userPostComment: UserPostComment
    createdAt: String!
    updatedAt: String!
  }
`;
