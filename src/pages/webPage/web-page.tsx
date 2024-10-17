import { useEffect } from "react";
import { CardPost } from "../../components/cardPost/card-post";
import { Header } from "../../components/header/header";
import { AddPost } from "./components/addPost/add-post";
import { UseWebPage } from "../../hooks/useWebPage/use-web-page";
import { useParams } from "react-router-dom";
import { ModalUpdatePlan } from "./components/modal/modalUpdatePlan/modal-update-plan";
import { ModalNewPost } from "./components/modal/modalNewPost/modal-new-post";
import { Loader } from "../../components/loader/loader";

export const WebPage = () => {
  const { handleGetPosts, handleGetUser, posts, loading } = UseWebPage();
  const { userId } = useParams();

  useEffect(() => {
    handleGetPosts(userId ?? "");
    handleGetUser(userId ?? "");
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Header />

          <section className="mt-5 w-full flex justify-end pr-10">
            <AddPost />
          </section>
          <section className="mt-5  justify-center sm:justify-normal md:w-full h-full flex flex-col items-center ">
            {posts?.map((post) => {
              return (
                <div
                  style={{
                    minWidth: window.innerWidth <= 450 ? "90%" : "400px",
                    maxWidth: window.innerWidth <= 450 ? "90%" : "400px",
                  }}
                  className="py-2 my-10 pr-10 pl-5 border-0.5px  "
                >
                  <CardPost data={post} />
                </div>
              );
            })}
          </section>

          <ModalNewPost />
          <ModalUpdatePlan />
        </>
      )}
    </>
  );
};
