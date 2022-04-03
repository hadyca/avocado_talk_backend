import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import { deleteFile, uploadToS3 } from "../../shared/shared.utils";

const resolverFn = async (
  _,
  { username: newUsername, password: newPassword, bio, avatar },
  { loggedInUser }
) => {
  const existingUser = await client.user.findUnique({
    where: {
      id: loggedInUser.id,
    },
  });
  let awsFileUrl = null;
  if (avatar) {
    if (existingUser.avatarKey) {
      await deleteFile(existingUser.avatarKey);
    }
    awsFileUrl = await uploadToS3(avatar, loggedInUser.id, "avatar");
  }

  let uglyPassword = null;
  if (newPassword) {
    uglyPassword = await bcrypt.hash(newPassword, 10);
  }
  if (newUsername) {
    if (!existingUser.editUsername) {
      return {
        ok: false,
        error: "username은 30일에 한번만 변경 가능합니다.",
      };
    }
    // await client.user.update({
    //   where: {
    //     id: loggedInUser,
    //   },
    //   data: {
    //     editUsername: false,
    //   },
    // });
    // setTimeout(
    //   async () =>
    //     await client.user.update({
    //       where: {
    //         id: loggedInUser.id,
    //       },
    //       data: {
    //         editUsername: true,
    //       },
    //     }),
    //   1000 * 60 * 60 * 24 * 30
    // );

    const existingUsername = await client.user.findFirst({
      where: {
        username: newUsername,
      },
    });
    if (existingUsername) {
      return {
        ok: false,
        error: "이미 사용중인 유저이름이 있습니다.",
      };
    }
  }

  const updatedUser = await client.user.update({
    where: { id: loggedInUser.id },
    data: {
      ...(newUsername && { username: newUsername }),
      bio,
      ...(uglyPassword && { password: uglyPassword }),
      ...(awsFileUrl && {
        avatarUrl: awsFileUrl.Location,
        avatarKey: awsFileUrl.Key,
      }),
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
