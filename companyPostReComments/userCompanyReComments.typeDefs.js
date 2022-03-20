import { gql } from "apollo-server";

export default gql`
  type CompanyPostReComment {
    id: String!
    user: User!
    payload: String!
    isMine: Boolean!
    companyPostComment: CompanyPostComment
    createdAt: String!
    updatedAt: String!
  }
`;
