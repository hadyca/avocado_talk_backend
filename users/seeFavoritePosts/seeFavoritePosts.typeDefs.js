import { gql } from "apollo-server";

export default gql`
  type Query {
    seeFavoritePosts(lastId: Int): [CompanyPost]!
  }
`;
