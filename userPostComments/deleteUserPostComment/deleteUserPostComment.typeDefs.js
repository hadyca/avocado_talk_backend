import { gql } from "apollo-server";

export default gql`
  type deleteUserPostResult {
    ok: Boolean!
    error: String
    totalRecomments: Int!
  }

  type Mutation {
    deleteUserPostComment(commentId: Int!): deleteUserPostResult!
  }
`;
