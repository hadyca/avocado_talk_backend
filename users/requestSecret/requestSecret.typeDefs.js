import { gql } from "apollo-server";

export default gql`
  type Mutation {
    requestSecret(email: String!, authCode: Int!): MutationResponse!
  }
`;
