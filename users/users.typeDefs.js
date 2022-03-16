import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    username: String!
    email: String!
    avatar: String
    bio: String
    isMe: Boolean!
    followings: [Company]
    favoritePosts: [CompanyPost]
    totalFollowings: Int!
    userPosts: [UserPost]
    createdAt: String!
    updatedAt: String!
    myCompany: Company
  }
`;
