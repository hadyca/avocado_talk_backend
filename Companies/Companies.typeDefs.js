import { gql } from "apollo-server";

export default gql`
  type Company {
    id: String!
    companyName: String!
    addressStep1: String!
    addressStep2: String!
    addressStep3: String!
    email: String!
    sector: String!
    isMyCompany: Boolean!
    aboutUs: String!
    contactNumber: String!
    totalEmployees: Int
    isFollowing: Boolean!
    totalFollowers: Int!
    companyPosts: [CompanyPost]
    createdAt: String!
    updatedAt: String!
  }
`;
