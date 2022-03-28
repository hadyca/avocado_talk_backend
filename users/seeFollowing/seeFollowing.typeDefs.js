import { gql } from "apollo-server";

export default gql`
  type Query {
    seeFollowing(userId: Int!, offset: Int!): [User]!
  }
`;
