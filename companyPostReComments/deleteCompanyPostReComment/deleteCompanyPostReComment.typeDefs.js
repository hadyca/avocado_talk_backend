import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteCompanyPostReComment(reCommentId: Int!): MutationResponse!
  }
`;
