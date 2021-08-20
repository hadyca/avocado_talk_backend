import { gql } from "apollo-server";

export default gql`
  type Mutation {
    toggleFollowing(companyId: Int!): MutationResponse!
  }
`;
