import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <main className="flex flex-col gap-2 ">
        <h1 className="text-lg">{label}</h1>
        <textarea
          ref={ref}
          rows={5}
          {...props}
          className="h-280 rounded-md px-4 py-1 text-black outline-none resize-none"
        />
      </main>
    );
  }
);
