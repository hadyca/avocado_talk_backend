import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteCompanyPost(companyPostId: Int!): MutationResponse!
  }
`;
