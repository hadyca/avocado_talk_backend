import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadUserPost(fileUrl: Upload, title: String!, content: String!): UserPost
  }
`;
