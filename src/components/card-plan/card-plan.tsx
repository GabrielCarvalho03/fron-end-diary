import { useEffect, useState } from "react";
import { UseUpdatePlan } from "../../hooks/useUpdatePlan/use-update-plan";
import { Button } from "../button/button";

export const CardPlan = () => {
  const [isPolling, setIsPolling] = useState(false);
  const { handleUpdatePlan, getPlansUpdate } = UseUpdatePlan();

  useEffect(() => {
    if (isPolling) {
      const interval = setInterval(() => {
        getPlansUpdate();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPolling]);

  return (
    <main className=" mt-10 min-w-96 h-80 border-green-600 border-0.5px rounded-md relative ">
      <section className="w-full flex flex-col items-center">
        <div className="my-3">
          <h1 className="text-lg text-zinc-950 text-center">Plano Premium</h1>

          <h1 className=" my-6 text-3xl max-w-48 text-center  text-zinc-950 break-words ">
            Adicione 10 fotos
          </h1>

          <h1 className=" my-6 text-3xl max-w-48 text-center  text-zinc-950 break-words ">
            R$ 19,90
          </h1>
        </div>

        <div className="w-10/12 absolute bottom-10">
          <Button
            onClick={() => {
              setIsPolling(true);
              handleUpdatePlan();
            }}
            bgColor="bg-green-600"
            title="Atualizar Plano"
          />
        </div>
      </section>
    </main>
  );
};
