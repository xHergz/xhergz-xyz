import clsx from "clsx";
import { PropsWithChildren } from "react";

export type TooltipProps = PropsWithChildren<{
  text: string;
}>;

// TODO: Needs some styling adjustments but it works
const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  text,
}: TooltipProps): JSX.Element => {
  const tooltipClasses = clsx({
    "group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2":
      true,
    "-translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto": true,
  });

  return (
    <div className="group flex relative">
      {children}
      <span className={tooltipClasses}>{text}</span>
    </div>
  );
};

export default Tooltip;
