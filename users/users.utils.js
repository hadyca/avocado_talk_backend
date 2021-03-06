import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }
    const { id } = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await client.user.findUnique({
      where: { id },
      include: {
        myCompany: true,
      },
    });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const protectedResolver =
  (ourResolver) => (root, args, context, info) => {
    if (!context.loggedInUser) {
      const query = info.operation.operation === "query";
      if (query) {
        return null;
      } else {
        return {
          ok: false,
          error: "로그인이 필요합니다. 로그인 해주세요.",
        };
      }
    }
    return ourResolver(root, args, context, info);
  };

export const betweenDay = (newDate, originDate) => {
  const betweenTime = Math.floor((newDate - originDate) / 1000 / 60);
  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  return betweenTimeDay;
};
