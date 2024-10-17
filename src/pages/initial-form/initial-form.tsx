import { useEffect, useState } from "react";
import { Form } from "./form/form";
import { Preview } from "./preview/preview";
import { Api } from "../../services/axios-services";
import { useForm } from "react-hook-form";
import { DataFormInitial, SchemaFormInitial } from "./form/schema-form-initial";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseWebPage } from "../../hooks/useWebPage/use-web-page";
import { useNavigate } from "react-router-dom";
import { ButtonsPlans } from "./buttons-plans/buttons-plans";
import { UsePreview } from "../../hooks/usePreview/use-preview";

export const InitialForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<DataFormInitial>({
    mode: "onBlur",
    resolver: zodResolver(SchemaFormInitial),
  });
  const { RegisterUserInDataBase } = UseWebPage();
  const { plan } = UsePreview();

  const [polling, setPolling] = useState(false);
  const [userobj, setUserObj] = useState({} as DataFormInitial);

  useEffect(() => {
    if (polling) {
      const interval = setInterval(async () => {
        const response = await Api.get("/transactions");
        if (response.data !== null) {
          RegisterUserInDataBase(userobj, navigate);
          setPolling(false);
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [polling]);

  const handleRegisterUser = async (data: any) => {
    const response = await Api.post(`/transactions/${plan}`);

    if (response.status === 200) {
      setUserObj(data);
      window.open(response.data);
      setPolling(true);
    }
  };

  return (
    <main className="w-full h-full px-10">
      <section>
        <h1 className="py-10">
          Preencha as informações e crie um diário com o seu amor{" "}
        </h1>
        <ButtonsPlans />
        <form
          onSubmit={handleSubmit(handleRegisterUser)}
          className="w  sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-row  md:items-start gap-3 justify-between"
        >
          <Form register={register} />

          <div className=" sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-12/12  md:w-6/12 ">
            <h1 className="py-10 text-center">Preview</h1>

            <Preview />
          </div>
        </form>
      </section>
    </main>
  );
};
