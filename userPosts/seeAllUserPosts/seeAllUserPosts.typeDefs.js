import { gql } from "apollo-server";

export default gql`
  type Query {
    seeAllUserPosts(offset: Int!): [UserPost]
  }
`;
