import { gql } from "apollo-server";

export default gql`
  type Mutation {
    companyPostCommentReport(
      companyPostCommentId: Int!
      reason: String!
    ): MutationResponse!
  }
`;
