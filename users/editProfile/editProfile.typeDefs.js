import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editProfile(
      username: String
      usernameEditDate: Int
      password: String
      bio: String
      avatarUrl: Upload
    ): User!
  }
`;
