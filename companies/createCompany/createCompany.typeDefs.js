import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createCompany(
      companyName: String!
      aboutUs: String!
      email: String!
      sector: String!
      contactNumber: String!
      addressStep1: String!
      addressStep2: String!
      addressStep3: String!
      totalEmployees: Int
    ): MutationResponse!
  }
`;
