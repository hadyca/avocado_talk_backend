import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editCompanyPostComment(commentId: Int!, payload: String!): MutationResponse!
  }
`;
