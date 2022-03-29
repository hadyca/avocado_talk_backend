import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUserAllCompanyPosts(companyId: Int!, offset: Int!): [CompanyPost]
  }
`;
