import { gql } from "apollo-server";

export default gql`
  type CompanyPost {
    id: String!
    company: Company!
    file: [File]
    title: String!
    workingDay: WorkingDay
    dayOption: Boolean!
    startTime: Int!
    finishTime: Int!
    timeOption: Boolean!
    wageType: String!
    wage: String!
    content: String!
    totalCompanyPostLikes: Int!
    totalCompanyPostComments: Int!
    isFavorite: Boolean!
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

  type WorkingDay {
    id: String!
    monday: Boolean!
    tuesday: Boolean!
    wednesday: Boolean!
    thursday: Boolean!
    friday: Boolean!
    saturday: Boolean!
    sunday: Boolean!
  }
`;
