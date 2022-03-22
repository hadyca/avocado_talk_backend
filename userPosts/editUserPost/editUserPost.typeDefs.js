import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editUserPost(
      userPostId: Int!
      fileUrl: [Upload]
      content: String!
      category: String!
    ): MutationResponse!
  }
`;
