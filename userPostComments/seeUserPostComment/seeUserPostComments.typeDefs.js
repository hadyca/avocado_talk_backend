import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUserPostComment(userPostCommentId: Int!): UserPostComment
  }
`;
