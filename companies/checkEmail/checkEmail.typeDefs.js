import { gql } from "apollo-server";

export default gql`
  type Mutation {
    checkEmail(email: String!): MutationResponse!
  }
`;
