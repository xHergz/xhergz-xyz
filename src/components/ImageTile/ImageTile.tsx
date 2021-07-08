import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import { BaseProps } from '../../utils/componentUtils';

import './ImageTile.scss';

type ImageTileSize = 'small' | 'medium' | 'large';

type ImageTileProps = BaseProps & {
    imageSource: string;
    title: string;
    linkTo: string;
    size?: ImageTileSize;
}

const useDefaultProps = (props: ImageTileProps): ImageTileProps => {
    return {
        size: 'medium',
        ...props
    }
};

const ImageTile = (incomingProps: ImageTileProps): JSX.Element => {
    const props = useDefaultProps(incomingProps);
    const classes = classNames({
        [props.className]: props.className,
        imageTile: true,
        smallTile: props.size === 'small',
        mediumTile: props.size === 'medium',
        largeTile: props.size === 'large',
    });

    return (
        <Link 
            id={props.id}
            className={classes}
            style={props.style}
            to={props.linkTo}
        >
            <img className='tileImage' src={props.imageSource} />
            <span className='tileTitle'>{props.title}</span>
        </Link>
    );
}

export default ImageTile;
