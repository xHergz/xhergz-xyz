import clsx from "clsx";
import React, { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  description?: string;
  title?: string;
};

const Card: React.FunctionComponent<CardProps> = (
  props: CardProps
): JSX.Element => {
  const { className, children, description, title } = props;
  const divClasses = clsx({
    ["block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-w-lg"]:
      true,
  });

  return (
    <div {...props} className={twMerge(divClasses, className)}>
      {title ? (
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
      ) : null}
      {description ? (
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      ) : null}
      {children}
    </div>
  );
};

export default Card;
