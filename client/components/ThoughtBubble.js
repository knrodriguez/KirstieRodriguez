import React from 'react';
import { IMAGE_SIZES, getImgPath } from '../reducers/constants';

export default (props) => {
    const { size, type, handleClick, bottom, left } = props;
    const imgFileName =`thick-${type}-outline.png`;

    const className = `${IMAGE_SIZES[size]}`;
    const imgSrc = getImgPath(imgFileName);

    return (
        <img 
            className={`image-container-${size}`}
            src={imgSrc} 
            onClick={handleClick}
            style= {{
                position: 'absolute', 
                bottom: `${bottom}px`, 
                left: `${left}px`,
            }}
        />
    )
}