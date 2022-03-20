import { gql } from "apollo-server";

export default gql`
  type CompanyPost {
    id: String!
    company: Company!
    file: [File]
    title: String!
    content: String!
    totalCompanyPostLikes: Int!
    totalCompanyPostComments: Int!
    companyPostComments: [CompanyPostComment]
    createdAt: String!
    updatedAt: String!
    isMine: Boolean!
    isLiked: Boolean!
    deleted: Boolean!
  }

  type CompanyPostLike {
    id: String!
    companyPost: CompanyPost!
    createdAt: String!
    updatedAt: String!
  }

  type File {
    id: String!
    fileUrl: String!
    fileKey: String!
  }
`;
