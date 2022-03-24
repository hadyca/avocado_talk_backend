import { gql } from "apollo-server";

export default gql`
  type totalSectorCompanyPostsResult {
    ok: Boolean!
    totalPosts: Int!
  }

  type Query {
    totalSectorCompanyPosts(sector: String!): totalSectorCompanyPostsResult!
  }
`;
