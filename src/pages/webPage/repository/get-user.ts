import { Api } from "../../../services/axios-services";

export const getUser = async (userId: string) => {
  const response = await Api.get(`/users/${userId}`);

  return response.data;
};
