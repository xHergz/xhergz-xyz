import React from "react";
import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";

import { BaseProps } from "../../utils/componentUtils";

import styles from "./ImageTile.module.scss";
import { customLoader } from "../../utils/next.utils";

type ImageTileSize = "small" | "medium" | "large";

type ImageTileProps = BaseProps & {
  imageSource: string;
  title: string;
  linkTo: string;
  size?: ImageTileSize;
};

const useDefaultProps = (props: ImageTileProps): ImageTileProps => {
  return {
    size: "medium",
    ...props,
  };
};

const ImageTile = (incomingProps: ImageTileProps): JSX.Element => {
  const props = useDefaultProps(incomingProps);
  const classes = clsx({
    [props.className || ""]: props.className,
    [styles.imageTile]: true,
    [styles.smallTile]: props.size === "small",
    [styles.mediumTile]: props.size === "medium",
    [styles.largeTile]: props.size === "large",
  });

  return (
    <Link id={props.id} href={props.linkTo}>
      <div className={classes}>
        <Image
          className={styles.tileImage}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          src={props.imageSource}
          alt={`${props.title} tile image`}
          loader={customLoader}
        />
        <span className={styles.tileTitle}>{props.title}</span>
      </div>
    </Link>
  );
};

export default ImageTile;
