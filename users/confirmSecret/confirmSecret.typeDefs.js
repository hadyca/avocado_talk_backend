import { gql } from "apollo-server";

export default gql`
  type confirmSecretResult {
    ok: Boolean!
    token: String
    error: String
  }

  type Mutation {
    confirmSecret(
      email: String!
      username: String!
      password: String!
      secret: String!
    ): confirmSecretResult!
  }
`;
