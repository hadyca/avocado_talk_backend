import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUserPostMyComments(userPostId: Int!): [UserPostComment]
  }
`;
