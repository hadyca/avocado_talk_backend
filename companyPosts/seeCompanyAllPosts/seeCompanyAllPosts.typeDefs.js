import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCompanyAllPosts(companyId: Int!, offset: Int!): [CompanyPost]
  }
`;
