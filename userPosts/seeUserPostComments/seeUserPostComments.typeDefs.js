import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUserPostComments(userPostId: Int!): [UserPostComment]
  }
`;
