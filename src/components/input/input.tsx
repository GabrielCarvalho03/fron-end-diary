import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <main className="flex flex-col gap-2 ">
        <h1 className="text-lg">{label}</h1>
        <input
          ref={ref}
          {...props}
          className="h-10 rounded-md px-4 text-black outline-none"
        />
      </main>
    );
  }
);
