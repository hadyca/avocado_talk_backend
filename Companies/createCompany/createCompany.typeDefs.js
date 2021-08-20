import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createCompany(
      companyName: String!
      email: String!
      sector: String!
      aboutUs: String!
      contactNumber: String!
    ): MutationResponse!
  }
`;
