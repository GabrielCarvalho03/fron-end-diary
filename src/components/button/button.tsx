import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  colorText?: string;
  bgColor?: string;
};

export const Button = ({
  title,
  colorText,
  bgColor,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`w-full ${colorText ?? "text-white"} ${
        bgColor && bgColor
      } border-red-100 border-0.5px px-5 py-2 rounded-md`}
    >
      {title}
    </button>
  );
};
