import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCompanyPostComment(companyPostCommentId: Int!): CompanyPostComment
  }
`;
