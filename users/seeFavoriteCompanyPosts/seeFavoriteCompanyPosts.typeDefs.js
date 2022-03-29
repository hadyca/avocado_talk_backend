import { gql } from "apollo-server";

export default gql`
  type Query {
    seeFavoriteCompanyPosts(offset: Int!): [CompanyPost]!
  }
`;
