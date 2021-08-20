import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCompany(companyId: Int): Company
  }
`;
