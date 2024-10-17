import Modal from "react-modal";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseAddPost } from "../../../../../hooks/useAddPost/use-add-post";
import { FormDataPost, SchemaPost } from "./schemaPost";
import { ModalStyleObject } from "./modalStyleObject";
import { Input } from "../../../../../components/input/input";
import { TextArea } from "../../../../../components/TextArea/text-area";
import { DropFile } from "../../../../../components/dropFile/drop-file";

export const ModalNewPost = () => {
  const { ismodalActive, setismodalActive, handleAddPost } = UseAddPost();
  const { register, handleSubmit } = useForm<FormDataPost>({
    mode: "all",
    resolver: zodResolver(SchemaPost),
  });

  return (
    <main className="w-full h-full ">
      <Modal
        style={ModalStyleObject}
        isOpen={ismodalActive}
        onRequestClose={() => setismodalActive(false)}
      >
        <form
          onSubmit={handleSubmit(handleAddPost)}
          className=" lg:w-3xl pb-5 "
        >
          <h1 className="text-2xl font-semibold text-black text-center py-2">
            Nova publicação
          </h1>
          <div className="w-100% border-0.5px border-gray-600 rounded-md my-2">
            <Input {...register("title")} placeholder="Título" />
          </div>

          <div className="w-100% border-0.5px border-gray-600 rounded-md">
            <TextArea
              {...register("description")}
              placeholder="Adorei passar esse momento com você."
            />
          </div>

          <div className="py-5 max-h-64">
            <DropFile ismodal onDrop={() => {}} />

            <section className="w-full flex justify-end pb-5">
              <button
                type="submit"
                className="bg-blue-500 text-black rounded-md py-2 px-5"
              >
                Publicar
              </button>
            </section>
          </div>
        </form>
      </Modal>
    </main>
  );
};
