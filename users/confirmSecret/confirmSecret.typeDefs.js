import { gql } from "apollo-server";

export default gql`
  type confirmSecretResult {
    ok: Boolean!
    token: String
    error: String
  }

  type Mutation {
    confirmSecret(email: String!, secret: String!): confirmSecretResult!
  }
`;
