import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createCompanyPostComment(
      companyPostId: Int!
      payload: String!
    ): MutationResponse!
  }
`;
