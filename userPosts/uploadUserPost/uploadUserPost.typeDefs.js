import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadUserPost(fileUrl: Upload, content: String!): UserPost
  }
`;
