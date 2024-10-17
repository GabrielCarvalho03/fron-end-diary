import { S3CustomClient } from "../form/bocket.config";

export const RegisterPhoto = async (photo: File) => {
  const response = await S3CustomClient.uploadFile(
    photo,
    photo.type,
    undefined,
    photo.name,
    "public-read"
  );

  return response;
};
