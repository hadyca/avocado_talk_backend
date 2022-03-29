import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    username: String!
    email: String!
    avatar: String
    bio: String
    isMe: Boolean!
    following: [User]
    followers: [User]
    isFollowing: Boolean!
    totalFollowers: Int!
    favoriteUserPosts: [UserPost]
    favoriteCompanyPosts: [CompanyPost]
    totalFollowing: Int!
    totalUserPosts: Int!
    totalCompanyPosts: Int!
    userPosts: [UserPost]
    createdAt: String!
    updatedAt: String!
    myCompany: Company
  }
`;
