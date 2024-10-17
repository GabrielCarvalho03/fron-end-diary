import { Api } from "../../../services/axios-services";

export const GetPlanUser = async (userId: string) => {
  try {
    const plan = await Api.get(`/transactions/updatePlan/${userId}`);
    return plan.data;
  } catch (error) {
    console.error(error);
  }
};
