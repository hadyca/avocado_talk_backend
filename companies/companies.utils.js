import client from "../client";

export const getUserCompany = async (userId) => {
  const company = await client.company.findUnique({
    where: { userId },
  });
  console.log(company, "콤파니");
  return company;
};
