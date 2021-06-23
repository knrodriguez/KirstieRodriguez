import React from 'react';
import { IMAGE_SIZES, getImgPath } from '../reducers/constants';

export default (props) => {
    const { size, type, onClick, bottom, left } = props;
    const imgFileName =`thick-${type}-outline.png`;

    const className = `${IMAGE_SIZES[size]}`;
    const imgSrc = getImgPath(imgFileName);

    return (
        <img 
            className={`image-container-${size}`}
            src={imgSrc} 
            onClick={onClick}
            style= {{
                position: 'absolute', 
                bottom: `${bottom}px`, 
                left: `${left}px`,
            }}
        />
    )
}