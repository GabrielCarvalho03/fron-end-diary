export interface UseUpdatePlanProps {
  isModalUpdatePlanActive: boolean;
  setisModalUpdatePlanActive: (value: boolean) => void;
  handleUpdatePlan: () => void;

  getPlansUpdate: () => void;
}
