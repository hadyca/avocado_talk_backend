import { gql } from "apollo-server";

export default gql`
  type Mutation {
    companyPostReport(companyPostId: Int!, reason: String!): MutationResponse!
  }
`;
