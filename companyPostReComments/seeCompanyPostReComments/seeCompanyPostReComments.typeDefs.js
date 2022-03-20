import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCompanyPostReComments(companyPostCommentId: Int!): [CompanyPostReComment]
  }
`;
