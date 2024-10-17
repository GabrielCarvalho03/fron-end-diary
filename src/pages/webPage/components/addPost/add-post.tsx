import { UseAddPost } from "../../../../hooks/useAddPost/use-add-post";
import { UseUpdatePlan } from "../../../../hooks/useUpdatePlan/use-update-plan";
import { UseWebPage } from "../../../../hooks/useWebPage/use-web-page";

export const AddPost = () => {
  const { setismodalActive } = UseAddPost();
  const { setisModalUpdatePlanActive } = UseUpdatePlan();
  const { posts, user } = UseWebPage();

  console.log(user.plan);
  return (
    <button
      onClick={() =>
        posts.length === 3 && user.plan === "basic"
          ? setisModalUpdatePlanActive(true)
          : setismodalActive(true)
      }
      className={`px-10 py-3 bg-${
        posts.length === 10
          ? "gray-700 cursor-not-allowed pointer-events-none"
          : "red-400"
      } rounded-3xl `}
    >
      <h1 className="text-sm">Adicionar Post</h1>
    </button>
  );
};
