import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createUserPostReComment(
      userPostCommentId: Int!
      payload: String!
    ): MutationResponse!
  }
`;
