import { Api } from "../../../services/axios-services";

export const UpdatePlan = async (userId: string) => {
  try {
    const plan = await Api.post(`/transactions/updatePlan/${userId}`);

    return plan.data;
  } catch (error) {
    console.error(error);
  }
};
