import { gql } from "apollo-server";

export default gql`
  type deleteCompanyPostResult {
    ok: Boolean!
    error: String
    totalRecomments: Int!
  }

  type Mutation {
    deleteCompanyPostComment(commentId: Int!): deleteCompanyPostResult!
  }
`;
