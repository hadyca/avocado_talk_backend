import { gql } from "apollo-server";

export default gql`
  type Mutation {
    userPostReport(userPostId: Int!, reason: String!): MutationResponse!
  }
`;
