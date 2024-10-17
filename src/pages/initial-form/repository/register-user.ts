import { Api } from "../../../services/axios-services";
import { DataFormInitial } from "../form/schema-form-initial";
import { RegisterPhoto } from "./register-photo-user";

export const RegisterUser = async (
  data: DataFormInitial,
  file: File,
  plan: "basic" | "premium"
) => {
  const photoaws = await RegisterPhoto(file);

  const response = await Api.post("/users", {
    nameofcouple: data.coupleName,
    email: data.email,
    title: data.titlePost,
    description: data.description,
    photo: photoaws.location ?? "",
    plan,
  });
  return response.data;
};
