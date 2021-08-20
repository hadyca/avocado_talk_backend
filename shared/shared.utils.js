import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadToS3 = async (fileUrl, userId, folderName) => {
  const { filename, createReadStream } = await fileUrl;
  const readStream = createReadStream();
  const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
  const data = await new AWS.S3()
    .upload({
      Bucket: "avocadotalkbucket",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();

  return data;
};

export const deleteFile = async (Key) => {
  await new AWS.S3()
    .deleteObject({
      Bucket: "avocadotalkbucket",
      Key,
    })
    .promise();

  return;
};
