import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import { deleteFile, uploadToS3 } from "../../shared/shared.utils";

const resolverFn = async (
  _,
  {
    username: newUsername,
    usernameEditDate,
    password: newPassword,
    bio,
    avatarUrl,
  },
  { loggedInUser }
) => {
  const existingUser = await client.user.findUnique({
    where: {
      id: loggedInUser.id,
    },
  });
  let awsFileUrl = null;
  if (avatarUrl) {
    if (existingUser.avatarKey) {
      await deleteFile(existingUser.avatarKey);
    }
    awsFileUrl = await uploadToS3(avatarUrl, loggedInUser.id, "avatar");
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
      usernameEditDate,
      bio,
      ...(uglyPassword && { password: uglyPassword }),
      ...(awsFileUrl && {
        avatarUrl: awsFileUrl.Location,
        avatarKey: awsFileUrl.Key,
      }),
    },
  });
  if (updatedUser.id) {
    return updatedUser;
  } else {
    throw new Error("프로필을 업데이트 할 수 없습니다.");
  }
};

export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
