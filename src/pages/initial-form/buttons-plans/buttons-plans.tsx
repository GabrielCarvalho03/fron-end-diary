import { Button } from "../../../components/button/button";
import { UsePreview } from "../../../hooks/usePreview/use-preview";

export const ButtonsPlans = () => {
  const { plan, setPlan } = UsePreview();

  return (
    <main className="py-5 flex  items-center justify-center md:block  ">
      <section className=" w-full flex gap-5 px-2 py-2  sm:w-6/12  border-0.5px border-red-300">
        <div className="w-6/12">
          <h1 className="text-center">9,90</h1>
          <Button
            bgColor={plan === "basic" ? "bg-red-300" : ""}
            onClick={() => setPlan("basic")}
            title="Basic"
          />
        </div>
        <div className="w-6/12">
          <h1 className="text-center">19,90</h1>
          <Button
            bgColor={plan === "premium" ? "bg-red-300" : ""}
            onClick={() => setPlan("premium")}
            title="Premium"
          />
        </div>
      </section>
    </main>
  );
};
