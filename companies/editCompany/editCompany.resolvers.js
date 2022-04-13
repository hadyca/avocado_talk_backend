import client from "../../client";
import { getUserCompany } from "../companies.utils";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (
  _,
  {
    companyName: newCompanyName,
    aboutUs: newAboutUs,
    sector: newSector,
    totalEmployees: newTotalEmployees,
    email: newEmail,
    contactNumber: newContactNumber,
    addressStep1: newAddressStep1,
    addressStep2: newAddressStep2,
    addressStep3: newAddressStep3,
  },
  { loggedInUser }
) => {
  if (newEmail) {
    const existingEmail = client.user.findUnique({
      where: { email: newEmail },
    });
    const existingEmail2 = client.company.findUnique({
      where: { email: newEmail },
    });
    if (existingEmail || existingEmail2) {
      throw new Error("이미 사용중인 Email주소가 있습니다.");
    }
  }
  const userCompany = await getUserCompany(loggedInUser.id);
  const updatedCompany = await client.company.update({
    where: { id: userCompany.id },
    data: {
      ...(newCompanyName && { companyName: newCompanyName }),
      ...(newAboutUs && { aboutUs: newAboutUs }),
      ...(newSector && { sector: newSector }),
      ...(newTotalEmployees && { totalEmployees: newTotalEmployees }),
      ...(newEmail && { email: newEmail }),
      ...(newContactNumber && { contactNumber: newContactNumber }),
      ...(newAddressStep1 && { addressStep1: newAddressStep1 }),
      ...(newAddressStep2 && { addressStep1: newAddressStep2 }),
      ...(newAddressStep3 && { addressStep1: newAddressStep3 }),
    },
  });
  if (updatedCompany.id) {
    return updatedCompany;
  } else {
    throw new Error("회사 정보를 업데이트 할 수 없습니다.");
  }
};

export default {
  Mutation: {
    editCompany: protectedResolver(resolverFn),
  },
};
