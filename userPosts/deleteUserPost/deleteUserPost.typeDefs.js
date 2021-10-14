import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteUserPost(userPostId: Int!): MutationResponse!
  }
`;
