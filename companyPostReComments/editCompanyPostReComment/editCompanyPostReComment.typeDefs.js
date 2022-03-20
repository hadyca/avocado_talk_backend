import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editCompanyPostReComment(
      reCommentId: Int!
      payload: String!
    ): MutationResponse!
  }
`;
