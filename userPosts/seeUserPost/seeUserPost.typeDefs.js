import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUserPost(userPostId: Int!): UserPost
  }
`;
