import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormCodeUser, SchemaCodeUser } from "./schemaCodeUser";
import { useNavigate } from "react-router-dom";
import { getUser } from "../webPage/repository/get-user";

export const Subscriber = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormCodeUser>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(SchemaCodeUser),
  });

  const handleUserSubscriber = async (data: FormCodeUser) => {
    const userId = data.codeUser;
    try {
      const user = await getUser(userId);
      console.log(user);

      if (user.userId === userId) {
        navigate(`/webPage/${userId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleUserSubscriber)}
      className="w-full h-screen flex flex-col gap-6 justify-center items-center"
    >
      <h1 className="text-2xl text-center">
        Escreva o código enviado por email para acessar seu site{" "}
      </h1>
      <div className="w-6/12">
        <Input {...register("codeUser")} />
      </div>

      <div className="w-6/12">
        <Button title="acessar" />
      </div>
    </form>
  );
};
