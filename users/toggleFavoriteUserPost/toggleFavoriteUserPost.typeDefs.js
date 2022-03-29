import { gql } from "apollo-server";

export default gql`
  type Mutation {
    toggleFavoriteUserPost(userPostId: Int!): MutationResponse!
  }
`;
