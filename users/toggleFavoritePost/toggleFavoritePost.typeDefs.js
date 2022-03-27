import { gql } from "apollo-server";

export default gql`
  type Mutation {
    toggleFavoritePost(companyPostId: Int!): MutationResponse!
  }
`;
