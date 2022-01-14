import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editUserPostReComment(
      reCommentId: Int!
      payload: String!
    ): MutationResponse!
  }
`;
