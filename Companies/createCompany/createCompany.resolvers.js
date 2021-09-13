import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createCompany: protectedResolver(
      async (
        _,
        {
          companyName,
          email,
          sector,
          aboutUs,
          contactNumber,
          addressStep1,
          addressStep2,
          addressStep3,
          totalEmployees,
        },
        { loggedInUser }
      ) => {
        try {
          const existingEmail = await client.company.findFirst({
            where: {
              email,
            },
          });
          if (existingEmail) {
            throw new Error("이미 사용 중인 Email주소가 있습니다.");
          }
          await client.company.create({
            data: {
              companyName,
              email,
              sector,
              aboutUs,
              contactNumber,
              addressStep1,
              addressStep2,
              addressStep3,
              totalEmployees,
              userId: loggedInUser.id,
            },
          });
          return {
            ok: true,
          };
        } catch (e) {
          return e;
        }
      }
    ),
  },
};
