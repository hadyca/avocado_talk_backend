import { gql } from "apollo-server";

export default gql`
  type UserPostReComment {
    id: String!
    user: User!
    userPost: UserPost!
    payload: String!
    isMine: Boolean!
    createdAt: String!
    updatedAt: String!
    deleted: Boolean!
  }
`;
