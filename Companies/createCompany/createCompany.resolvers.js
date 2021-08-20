import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createCompany: protectedResolver(
      async (
        _,
        { companyName, email, sector, aboutUs, contactNumber },
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
              userId: loggedInUser.id,
            },
          });
          await client.com;
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
