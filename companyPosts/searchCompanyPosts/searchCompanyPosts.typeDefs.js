import { gql } from "apollo-server";

export default gql`
  type Query {
    searchCompanyPosts(addressStep2: String, postSector: String): [CompanyPost]
  }
`;
