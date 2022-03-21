import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCompanyPostByDistrict(addressStep2: String!, offset: Int!): [CompanyPost]
  }
`;
