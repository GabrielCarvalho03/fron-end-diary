import { create } from "zustand";
import { postProps, userProps, useWebPageProps } from "./types";
import { getPosts } from "../../pages/webPage/repository/get-post-repository";
import { getUser } from "../../pages/webPage/repository/get-user";
import { RegisterUser } from "../../pages/initial-form/repository/register-user";
import { UsePreview } from "../usePreview/use-preview";

export const UseWebPage = create<useWebPageProps>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),

  posts: [],
  setPosts: (posts: postProps[]) => set({ posts }),
  handleGetPosts: async (userId) => {
    const { setPosts, setLoading } = UseWebPage.getState();
    setLoading(true);
    const response = await getPosts(userId);
    setLoading(false);
    setPosts(response);
  },

  user: {} as userProps,
  setUser: (user: userProps) => set({ user }),
  handleGetUser: async (userId) => {
    const { setUser, setLoading } = UseWebPage.getState();
    setLoading(true);
    const response = await getUser(userId);
    setLoading(false);
    setUser(response);
  },

  RegisterUserInDataBase: async (data, navigate) => {
    const { file, setFile, plan } = UsePreview.getState();
    try {
      const response = await RegisterUser(data, file, plan);
      setFile({} as File);
      navigate(`/webPage/${response.id as string}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
}));
