import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCompanyPostByDistrict(
      addressStep1: String
      addressStep2_1: String
      addressStep2_2: String
      addressStep2_3: String
      addressStep2_4: String
      addressStep2_5: String
      offset: Int!
    ): [CompanyPost]
  }
`;
