import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editCompany(
      companyName: String
      aboutUs: String
      totalEmployees: Int
      email: String
      contactNumber: String
      addressStep1: String
      addressStep2: String
      addressStep3: String
    ): Company!
  }
`;
