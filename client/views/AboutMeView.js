import React, { useRef, useState } from 'react';
import { ThoughtBubble } from '../components';
import { CONSTS, getImgPath, IMAGE_SIZES } from '../reducers/constants'

export default (props) => {
    const { SIZES, TYPES } = CONSTS;
    const headImage = getImgPath('head.png');
    const headRef = useRef(null);
    const [headWidth, setHeadWidth] = useState(0);
    const [headHeight, setHeadHeight] = useState(0);

    // function generateThoughtBubbles() {
    //     const bubblesProps = [
    //         {size: SIZES.MICRO, type: TYPES.ROUND},
    //         {size: SIZES.MINI, type: TYPES.ROUND},
    //         {size: SIZES.SM, type: TYPES.ROUND},
    //         {size: SIZES.MICRO, type: TYPES.ROUND},
    //         {size: SIZES.MICRO, type: TYPES.ROUND},
    //         {size: SIZES.MICRO, type: TYPES.ROUND},
    //     ]

    //     const windowSize = window.innerWidth;
    //     for(let i = 0; i < bubblesProps.length; i++){
    //         let props = bubblesProps[i];

    //         return(
    //             <ThoughtBubble {...props} />
    //         )
    //     }
    // }

    function handleImageLoad(e){
        console.log(e.target)
        setHeadWidth(e.target.clientWidth)
        setHeadHeight(e.target.clientHeight)
    }

    return (
        <>
            Inside Kirstie's Mind
            <div>
                <img 
                    id='head-image' 
                    src={headImage} 
                    ref={headRef}
                    onLoad={handleImageLoad}
                />
                    <ThoughtBubble 
                        size={SIZES.MICRO} 
                        type={TYPES.ROUND}
                        bottom={.8 * headHeight}
                        left={headWidth}
                    />
                    <ThoughtBubble 
                        size={SIZES.MICRO} 
                        type={TYPES.ROUND}
                        bottom={.65 * headHeight}
                        left={headWidth + 1.5 * IMAGE_SIZES[SIZES.MICRO]}
                    />
                    <ThoughtBubble 
                        size={SIZES.MINI} 
                        type={TYPES.ROUND}
                        bottom={.4 * headHeight}
                        left={headWidth + 2 * IMAGE_SIZES[SIZES.MICRO]}
                    />
                    <ThoughtBubble 
                        size={SIZES.SM} 
                        type={TYPES.ROUND}
                        bottom={.1 * headHeight}
                        left={headWidth + 1.75 * IMAGE_SIZES[SIZES.MINI]}
                    />
                    <ThoughtBubble 
                        size={SIZES.SM} 
                        type={TYPES.ROUND}
                        bottom={.04 * headHeight}
                        left={headWidth + 2.5 * IMAGE_SIZES[SIZES.SM]}
                    />
                </div>
                    <ThoughtBubble 
                        size={SIZES.MD} 
                        type={TYPES.WIDE} 
                        bottom={.1 * headHeight}
                        left={headWidth + 3.75 * IMAGE_SIZES[SIZES.SM]}
                    />
                    <ThoughtBubble 
                        size={SIZES.MD} 
                        type={TYPES.WIDE}
                        bottom={.4 * headHeight}
                        left={headWidth + 3.3 * IMAGE_SIZES[SIZES.MD]}
                    />
                    <ThoughtBubble 
                        size={SIZES.MD} 
                        type={TYPES.WIDE}
                        bottom={1.4 * headHeight}
                        left={headWidth + 4.1 * IMAGE_SIZES[SIZES.MD]}
                    />
        </>
    )
}