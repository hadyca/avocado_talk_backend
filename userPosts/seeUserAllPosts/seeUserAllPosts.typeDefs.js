import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUserAllPosts(userId: Int!): [UserPost]
  }
`;
