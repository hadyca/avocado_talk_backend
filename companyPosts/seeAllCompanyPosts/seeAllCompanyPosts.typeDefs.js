import { gql } from "apollo-server";

export default gql`
  type Query {
    seeAllCompanyPosts(offset: Int!): [CompanyPost]
  }
`;
