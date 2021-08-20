import { gql } from "apollo-server";

export default gql`
  type Query {
    seeFollowings(username: String!, lastId: Int): [Company]!
  }
`;
