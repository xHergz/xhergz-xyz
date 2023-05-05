import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "small" | "medium" | "large";
};

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  size = "medium",
  ...props
}: IconButtonProps): JSX.Element => {
  const { children } = props;

  const buttonClasses = clsx({
    "w-8 h-8": size === "small",
    "w-12 h-12": size === "medium",
    "w-16 h-16": size === "large",
    [props.className || ""]: true,
  });

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
