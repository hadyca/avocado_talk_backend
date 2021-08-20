import { gql } from "apollo-server";

export default gql`
  type UserPostComment {
    id: String!
    user: User!
    userPost: UserPost!
    payload: String!
    isMine: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;
