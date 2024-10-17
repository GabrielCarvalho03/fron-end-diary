import { FormDataPost } from "../../pages/webPage/components/modal/modalNewPost/schemaPost";

export interface useAddPostProps {
  ismodalActive: boolean;
  setismodalActive: (ismodalActive: boolean) => void;
  handleAddPost: (data: FormDataPost) => void;
}
