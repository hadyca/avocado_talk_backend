import { gql } from "apollo-server";

export default gql`
  type Query {
    seeFollowers(userId: Int!, offset: Int!): [User]!
  }
`;
