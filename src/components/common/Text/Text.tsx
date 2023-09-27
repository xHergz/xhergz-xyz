import clsx from "clsx";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color: "primary" | "secondary" | "white";
};

const Text: React.FunctionComponent<TextProps> = (
  props: TextProps
): JSX.Element => {
  const { className, color, children, variant } = props;

  const textClasses = clsx({
    "text-grey-700": color === "primary",
    "text-grey-400": color === "secondary",
    "text-white": color === "white",
    "text-5xl": variant === "h1",
    "text-4xl": variant === "h2",
    "text-3xl": variant === "h3",
    "text-2xl": variant === "h4",
    "text-xl": variant === "h5",
    "text-lg": variant === "h6",
    "text-base": variant === "p",
    "text-sm": variant === "span",
  });
  const TextTag = variant;

  return (
    <TextTag className={twMerge(textClasses, className)}>{children}</TextTag>
  );
};

export default Text;
