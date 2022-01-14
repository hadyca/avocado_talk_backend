import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editUserPost(
      userPostId: Int!
      fileUrl: [Upload]
      title: String!
      content: String!
      category: String!
    ): UserPost
  }
`;
