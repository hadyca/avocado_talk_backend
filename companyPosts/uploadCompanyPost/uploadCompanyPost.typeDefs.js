import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadCompanyPost(
      fileUrl: Upload
      title: String!
      content: String!
      postSector: String!
    ): CompanyPost
  }
`;
