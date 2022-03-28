import { gql } from "apollo-server";

export default gql`
  type Mutation {
    toggleFollowing(userId: Int!): MutationResponse!
  }
`;
