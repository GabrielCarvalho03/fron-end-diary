import { create } from "zustand";
import { UseUpdatePlanProps } from "./types";
import { UpdatePlan } from "../../pages/webPage/repository/update-plan";
import { UseWebPage } from "../useWebPage/use-web-page";
import { GetPlanUser } from "../../pages/webPage/repository/get-update-plan";

export const UseUpdatePlan = create<UseUpdatePlanProps>((set) => ({
  isModalUpdatePlanActive: false,
  setisModalUpdatePlanActive: (value: boolean) =>
    set({ isModalUpdatePlanActive: value }),

  handleUpdatePlan: async () => {
    const { user } = UseWebPage.getState();
    try {
      const response = await UpdatePlan(user.userId);
      window.open(response, "_blank");
    } catch (error) {
      console.log(error);
    }
  },

  getPlansUpdate: async () => {
    const { user } = UseWebPage.getState();
    const { setisModalUpdatePlanActive } = UseUpdatePlan.getState();
    try {
      const response = await GetPlanUser(user.userId);
      if (response) {
        setisModalUpdatePlanActive(false);
        window.location.reload();
      }
    } catch (error) {
      console.log;
    }
  },
}));
