import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteCompany(userId: Int!): MutationResponse!
  }
`;
