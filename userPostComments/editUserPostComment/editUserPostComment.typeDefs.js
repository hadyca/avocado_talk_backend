import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editUserPostComment(commentId: Int!, payload: String!): MutationResponse!
  }
`;
