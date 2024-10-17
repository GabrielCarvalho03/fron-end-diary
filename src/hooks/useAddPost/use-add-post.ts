import { create } from "zustand";
import { useAddPostProps } from "./types";
import { FormDataPost } from "../../pages/webPage/components/modal/modalNewPost/schemaPost";
import { UsePreview } from "../usePreview/use-preview";
import { AddNewPost } from "../../pages/webPage/repository/add-new-post";
import { UseWebPage } from "../useWebPage/use-web-page";

export const UseAddPost = create<useAddPostProps>((set) => ({
  ismodalActive: false,
  setismodalActive: (ismodalActive: boolean) =>
    set({ ismodalActive: ismodalActive }),

  handleAddPost: async (data: FormDataPost) => {
    const { file } = UsePreview.getState();
    const { setismodalActive } = UseAddPost.getState();
    const { user } = UseWebPage.getState();

    try {
      const addPost = await AddNewPost(data, file, user.userId);
      console.log(addPost);
      setismodalActive(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  },
}));
