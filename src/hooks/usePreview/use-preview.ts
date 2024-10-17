import { create } from "zustand";
import { usePreviewProps } from "./types";

export const UsePreview = create<usePreviewProps>((set) => ({
  preview: "",
  setPreview: (value: string) => set({ preview: value }),

  Title: "",
  setTitle: (value: string) => set({ Title: value }),

  description: "",
  setDescription: (value: string) => set({ description: value }),

  file: {} as File,
  setFile: (value: File) => set({ file: value }),

  plan: "basic",
  setPlan: (value: "basic" | "premium") => set({ plan: value }),
}));
