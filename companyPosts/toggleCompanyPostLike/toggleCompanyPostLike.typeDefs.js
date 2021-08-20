import { gql } from "apollo-server";

export default gql`
  type Mutation {
    toggleCompanyPostLike(companyPostId: Int!): MutationResponse!
  }
`;
