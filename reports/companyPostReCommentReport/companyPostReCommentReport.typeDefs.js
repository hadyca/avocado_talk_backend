import { gql } from "apollo-server";

export default gql`
  type Mutation {
    companyPostReCommentReport(
      companyPostReCommentId: Int!
      reason: String!
    ): MutationResponse!
  }
`;
