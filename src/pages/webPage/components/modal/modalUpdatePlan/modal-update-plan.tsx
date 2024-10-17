import Modal from "react-modal";
import { ModalStyleObject } from "../modalNewPost/modalStyleObject";
import { CardPlan } from "../../../../../components/card-plan/card-plan";
import CloseIcon from "../../../../../assets/icons/close-icon";
import { UseUpdatePlan } from "../../../../../hooks/useUpdatePlan/use-update-plan";

export const ModalUpdatePlan = () => {
  const { isModalUpdatePlanActive, setisModalUpdatePlanActive } =
    UseUpdatePlan();

  return (
    <main className="w-full h-full ">
      <Modal
        style={ModalStyleObject}
        isOpen={isModalUpdatePlanActive}
        onRequestClose={() => setisModalUpdatePlanActive(false)}
      >
        <main className="lg:w-3xl pb-5 relative ">
          <div
            onClick={() => {
              setisModalUpdatePlanActive(false);
            }}
            className=" absolute right-8 -top-4  md:right-8 lg:top-1 cursor-pointer "
          >
            <CloseIcon />
          </div>

          <h1 className="text-2xl font-semibold text-black text-center py-2">
            Não é possivel adicionar uma nova lembrança
          </h1>
          <p className="text-gray-600 text-center">
            o plano basico permite apenas 3 lembranças , mas nao fique triste{" "}
          </p>
          <p className="text-gray-600 text-center">
            atualize seu plano para ter acesso a mais funcionalidades
          </p>

          <div className="w-full flex flex-col items-center">
            <CardPlan />
          </div>
        </main>
      </Modal>
    </main>
  );
};
