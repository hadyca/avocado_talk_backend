import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteUserPostReComment(reCommentId: Int!): MutationResponse!
  }
`;
