import { gql } from "apollo-server";

export default gql`
  type seeFollowersResult {
    ok: Boolean!
    error: String
    followers: [User]
  }
  type Query {
    seeFollowers(companyId: Int!, lastId: Int): seeFollowersResult!
  }
`;
