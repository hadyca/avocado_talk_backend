import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import { uploadToS3 } from "../../shared/shared.utils";

const resolverFn = async (
  _,
  { username: newUsername, password: newPassword, bio, avatar },
  { loggedInUser }
) => {
  let avatarUrl = null;
  if (avatar) {
    avatarUrl = await uploadToS3(avatar, loggedInUser.id, "avatar");
  }

  let uglyPassword = null;
  if (newPassword) {
    uglyPassword = await bcrypt.hash(newPassword, 10);
  }
  if (newUsername) {
    const existingUsername = await client.user.findFirst({
      where: {
        username: newUsername,
      },
    });
    if (existingUsername) {
      throw new Error("이미 사용중인 유저이름이 있습니다.");
    }
  }

  const updatedUser = await client.user.update({
    where: { id: loggedInUser.id },
    data: {
      ...(newUsername && { username: newUsername }),
      bio,
      ...(uglyPassword && { password: uglyPassword }),
      ...(avatarUrl && { avatar: avatarUrl.Location }),
    },
  });
  if (updatedUser.id) {
    return {
      ok: true,
    };
  } else {
    return {
      ok: false,
      error: "프로필을 업데이트 할 수 없습니다.",
    };
  }
};

export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
