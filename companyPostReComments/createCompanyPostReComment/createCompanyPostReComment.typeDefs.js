import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createCompanyPostReComment(
      companyPostCommentId: Int!
      payload: String!
    ): CompanyPostReComment
  }
`;
