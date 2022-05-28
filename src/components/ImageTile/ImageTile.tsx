import React from "react";
import Link from "next/link";

import clsx from "clsx";

import { BaseProps } from "../../utils/componentUtils";

import styles from "./ImageTile.module.scss";

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
        <img className={styles.tileImage} src={props.imageSource} />
        <span className={styles.tileTitle}>{props.title}</span>
      </div>
    </Link>
  );
};

export default ImageTile;
