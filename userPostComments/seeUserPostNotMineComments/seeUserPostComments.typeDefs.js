import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUserPostNotMineComments(userPostId: Int!): [UserPostComment]
  }
`;
