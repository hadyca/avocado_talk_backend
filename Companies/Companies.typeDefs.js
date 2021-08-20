import { gql } from "apollo-server";

export default gql`
  type Company {
    id: String!
    companyName: String!
    address: String!
    email: String!
    sector: String!
    isMyCompany: Boolean!
    aboutUs: String!
    contactNumber: String!
    isFollowing: Boolean!
    totalFollowers: Int!
    companyPosts: [CompanyPost]
    createdAt: String!
    updatedAt: String!
  }
`;
