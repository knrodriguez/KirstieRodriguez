import React from 'react';
import { ThoughtBubble } from '../components';
import { consts } from '../reducers/constants'

export default (props) => {
    const { sizes, types } = consts;
    return (
        <>
            Inside Kirstie's Mind
            <ThoughtBubble 
                size={sizes.MICRO} 
                type={types.ROUND} 
                outline={true} 
            />
            {/* <ThoughtBubble 
                size={sizes.MD} 
                type={types.ROUND} 
                outline={true} 
            /> */}
        </>
    )
}