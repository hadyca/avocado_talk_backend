import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadCompanyPost(
      fileUrl: [Upload]
      title: String!
      day: String!
      dayOption: Boolean
      startTime: String!
      finishTime: String!
      timeOption: Boolean
      content: String!
    ): CompanyPost
  }
`;
