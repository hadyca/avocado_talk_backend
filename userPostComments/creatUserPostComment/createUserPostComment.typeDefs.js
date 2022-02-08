import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createUserPostComment(userPostId: Int!, payload: String!): UserPostComment
  }
`;
