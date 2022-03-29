import { gql } from "apollo-server";

export default gql`
  type Query {
    seeFavoriteUserPosts(offset: Int!): [UserPost]!
  }
`;
