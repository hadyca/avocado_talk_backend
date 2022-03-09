import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createCompany(
      companyName: String!
      aboutUs: String!
      sector: String!
      totalEmployees: Int!
      email: String!
      contactNumber: String!
      addressStep1: String!
      addressStep2: String!
      addressStep3: String!
    ): MutationResponse!
  }
`;
