import { gql } from "apollo-server";

export default gql`
  type Query {
    seeFavoritePosts(offset: Int!): [CompanyPost]!
  }
`;
