export interface usePreviewProps {
  preview: string;
  setPreview: (value: string) => void;

  Title: string;
  setTitle: (value: string) => void;

  description?: string;
  setDescription: (value: string) => void;

  file: File;
  setFile: (value: File) => void;

  plan: "basic" | "premium";
  setPlan: (value: "basic" | "premium") => void;
}
