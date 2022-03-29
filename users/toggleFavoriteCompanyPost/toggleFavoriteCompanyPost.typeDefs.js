import { gql } from "apollo-server";

export default gql`
  type Mutation {
    toggleFavoriteCompanyPost(companyPostId: Int!): MutationResponse!
  }
`;
