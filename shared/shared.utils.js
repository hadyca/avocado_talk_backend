import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadToS3 = async (file, userId, folderName) => {
  console.log(file, "s3file받았음");
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
  console.log(objectName, "오브젝네임이다");
  const data = await new AWS.S3()
    .upload({
      Bucket: "avocadotalkbucket",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  console.log(data, "최종데이타");
  return data;
};

export const deleteFile = async (key) => {
  await new AWS.S3()
    .deleteObject({
      Bucket: "avocadotalkbucket",
      Key: key,
    })
    .promise();

  return;
};
