import { gql } from "apollo-server";

export default gql`
  type CompanyPostComment {
    id: String!
    user: User!
    companyPost: CompanyPost!
    payload: String!
    isMine: Boolean!
    companyPostReComments: [CompanyPostReComment]
    createdAt: String!
    updatedAt: String!
  }
`;
