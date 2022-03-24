import { gql } from "apollo-server";

export default gql`
  type totalAdd1CompanyPostsResult {
    ok: Boolean!
    totalPosts: Int!
  }

  type Query {
    totalAdd1CompanyPosts(addressStep1: String!): totalAdd1CompanyPostsResult!
  }
`;
