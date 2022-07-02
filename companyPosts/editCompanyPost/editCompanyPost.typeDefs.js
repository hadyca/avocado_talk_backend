import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editCompanyPost(
      companyPostId: Int!
      fileUrl: [Upload]
      title: String!
      mon: Boolean!
      tue: Boolean!
      wed: Boolean!
      thu: Boolean!
      fri: Boolean!
      sat: Boolean!
      sun: Boolean!
      dayOption: Boolean!
      startTime: Int!
      finishTime: Int!
      timeOption: Boolean!
      wageType: String!
      wage: String!
      contactNumber: String!
      email: String!
      content: String!
    ): MutationResponse!
  }
`;
