import { DataFormInitial } from "../../pages/initial-form/form/schema-form-initial";

export type postProps = {
  id: number;
  title: string;
  description: string;
  photo: string;
  userId: string;
  cretatedAt: string;
};

export type userProps = {
  userId: string;
  email: string;
  nameofcouple: string;
  plan: "basic" | "premium";
};

export interface useWebPageProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;

  posts: postProps[];
  setPosts: (posts: postProps[]) => void;
  handleGetPosts: (userId: string) => void;

  user: userProps;
  setUser: (user: userProps) => void;
  handleGetUser: (userId: string) => void;
  RegisterUserInDataBase: (data: DataFormInitial, navigate: any) => void;
}
