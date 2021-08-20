import { gql } from "apollo-server";

export default gql`
  type loginResult {
    ok: Boolean!
    error: String
    token: String
  }

  type Mutation {
    login(email: String!, password: String!): loginResult!
  }
`;
