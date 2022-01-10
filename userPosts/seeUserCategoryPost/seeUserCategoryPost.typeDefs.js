import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUserCategoryPost(category: String!, offset: Int!): [UserPost]
  }
`;
