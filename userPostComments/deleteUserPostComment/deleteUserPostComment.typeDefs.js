import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteUserPostComment(commentId: Int!): MutationResponse!
  }
`;
