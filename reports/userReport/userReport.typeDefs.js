import { gql } from "apollo-server";

export default gql`
  type Mutation {
    userReport(userId: Int!, reason: String!): MutationResponse!
  }
`;
