import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import Button, { ButtonProps } from "../Button";

export type IconButtonProps = ButtonProps & {
  Icon: React.ComponentType<{ className?: string }>;
};

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  size = "md",
  ...props
}: IconButtonProps): JSX.Element => {
  const { children, className, Icon } = props;

  const buttonClasses = clsx({
    "py-1 px-1": size === "sm",
    "py-2 px-2": size === "md",
    "py-4 px-3": size === "lg",
  });

  const iconClasses = clsx({
    "w-4 h-4": size === "sm",
    "w-6 h-6": size === "md",
    "w-8 h-8": size === "lg",
  });

  return (
    <Button className={twMerge(buttonClasses, className)} {...props}>
      <Icon className={iconClasses} />
    </Button>
  );
};

export default IconButton;
