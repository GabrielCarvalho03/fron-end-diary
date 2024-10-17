import { DropFile } from "../../../components/dropFile/drop-file";
import { Input } from "../../../components/input/input";
import { TextArea } from "../../../components/TextArea/text-area";
import { UsePreview } from "../../../hooks/usePreview/use-preview";

import { UseFormRegister } from "react-hook-form";
import { DataFormInitial } from "./schema-form-initial";

type FormProps = {
  register: UseFormRegister<DataFormInitial>;
};

export const Form = ({ register }: FormProps) => {
  const { setTitle, setDescription } = UsePreview();

  return (
    <div className=" sm:w-6/12  flex flex-col gap-5">
      <Input
        {...register("email")}
        label="E-mail"
        placeholder="teste@teste.com"
      />
      <Input
        {...register("coupleName")}
        label="Nome do casal"
        placeholder="João e Maria"
      />

      <section>
        <h1 className="py-7 text-lg font-bold">Primeiro post :</h1>

        <div className="w-12/12 flex flex-col gap-5">
          <Input
            {...register("titlePost")}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            label="Título do post"
            placeholder="Viagem para Paris"
          />

          <TextArea
            {...register("description")}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            label="Descrição do post"
            placeholder="Essa viagem não foi planejada mas foi incrivel...."
          />

          <DropFile onDrop={() => {}} />
        </div>
      </section>
    </div>
  );
};
