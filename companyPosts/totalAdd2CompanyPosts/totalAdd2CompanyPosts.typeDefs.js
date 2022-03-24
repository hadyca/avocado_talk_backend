import { gql } from "apollo-server";

export default gql`
  type totalAdd2CompanyPostsResult {
    ok: Boolean!
    totalPosts: Int!
  }

  type Query {
    totalAdd2CompanyPosts(addressStep2: String!): totalAdd2CompanyPostsResult!
  }
`;
