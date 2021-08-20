import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCompanyPostComments(companyPostId: Int!): [CompanyPostComment]
  }
`;
