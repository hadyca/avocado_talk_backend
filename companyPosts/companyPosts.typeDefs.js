import { gql } from "apollo-server";

export default gql`
  type CompanyPost {
    id: String!
    company: Company!
    fileUrl: String
    fileKey: String
    title: String!
    content: String!
    totalCompanyPostLikes: Int!
    companyPostComments: [CompanyPostComment]
    createdAt: String!
    updatedAt: String!
  }

  type CompanyPostLike {
    id: String!
    companyPost: CompanyPost!
    createdAt: String!
    updatedAt: String!
  }
`;
