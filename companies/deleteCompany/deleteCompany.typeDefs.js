import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteCompany(companyId: Int!): MutationResponse!
  }
`;
