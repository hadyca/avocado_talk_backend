import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editCompanyPost(
      companyPostId: Int!
      fileUrl: Upload
      title: String!
      content: String!
    ): MutationResponse!
  }
`;
