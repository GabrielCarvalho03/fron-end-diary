import { Api } from "../../../services/axios-services";

export const getPosts = async (userId: string) => {
  const response = await Api.get(`/posts/${userId}`);

  return response.data;
};
