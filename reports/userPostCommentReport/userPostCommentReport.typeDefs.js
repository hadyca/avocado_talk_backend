import { gql } from "apollo-server";

export default gql`
  type Mutation {
    userPostCommentReport(
      userPostCommentId: Int!
      reason: String!
    ): MutationResponse!
  }
`;
