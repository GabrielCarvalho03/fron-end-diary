import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen">
      <section className="w-full h-full flex flex-col gap-5  justify-center items-center">
        <div>
          <Button
            onClick={() => navigate("/subscriber")}
            title="Já sou assinante"
          />
        </div>

        <div>
          <Button onClick={() => navigate("/form")} title="Vamos começar" />
        </div>
      </section>
    </main>
  );
};
