import { gql } from "apollo-server";

export default gql`
  type Query {
    seeCompanyPostBySector(sector: String!, offset: Int!): [CompanyPost]
  }
`;
