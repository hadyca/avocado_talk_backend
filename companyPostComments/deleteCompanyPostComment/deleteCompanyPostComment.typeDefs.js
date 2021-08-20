import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteCompanyPostComment(commentId: Int!): MutationResponse!
  }
`;
