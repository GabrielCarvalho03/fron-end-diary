import { useForm } from "react-hook-form";
import { DataFormInitial, SchemaFormInitial } from "./schema-form-initial";
import { zodResolver } from "@hookform/resolvers/zod";

export const useFormInital = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataFormInitial>({
    mode: "all",
    resolver: zodResolver(SchemaFormInitial),
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};
