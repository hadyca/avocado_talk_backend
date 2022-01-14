import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUserPostReComments(userPostCommentId: Int!): [UserPostReComment]
  }
`;
