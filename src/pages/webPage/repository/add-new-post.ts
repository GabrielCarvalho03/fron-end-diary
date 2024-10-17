import { Api } from "../../../services/axios-services";
import { RegisterPhoto } from "../../initial-form/repository/register-photo-user";
import { FormDataPost } from "../components/modal/modalNewPost/schemaPost";
import { UploadResponse } from "aws-s3-upload-ash/src/types";

export const AddNewPost = async (
  data: FormDataPost,
  file: File,
  userId: string
) => {
  let photoAws = {} as UploadResponse;

  if (file.name) {
    photoAws = await RegisterPhoto(file);
  }

  try {
    const response = await Api.post("/posts", {
      title: data.title,
      description: data.description,
      photo: photoAws.location ? photoAws.location : null,
      userId,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
