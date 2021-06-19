import React from 'react';
import { IMAGE_SIZES, IMAGE_PATH } from '../reducers/constants';

export default (props) => {
    const { size, type, outline, handleClick } = props;
    const imgFileName=`${type}-${outline ? 'outline': 'transparent'}.png`;

    const className = `${IMAGE_SIZES[size]}`;

    return (
        <div style={{width: className, height: className}}>
            <img 
                src={`${IMAGE_PATH}${imgFileName}`} 
                onClick={handleClick}
            />
        </div>
    )
}