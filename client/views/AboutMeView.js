import React, { useRef, useState, useEffect } from 'react';
import { ThoughtBubble } from '../components';
import { CONSTS, getImgPath, IMAGE_SIZES } from '../reducers/constants'

export default (props) => {
    const { SIZES, TYPES } = CONSTS;
    const headImage = getImgPath('head.png');
    const headRef = useRef(null);
    const [headWidth, setHeadWidth] = useState(0);
    const [headHeight, setHeadHeight] = useState(0);
    const [desktopMode, setDesktopMode] = useState(false)

    useEffect( () => {
        setDesktopMode(window.matchMedia("(min-width: 1500px)").matches)
    }, [])

    function handleImageLoad(e){
        setHeadWidth(e.target.clientWidth)
        setHeadHeight(e.target.clientHeight)
    }

    return (
        <>
            {
                desktopMode ? 
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
                        left={headWidth + 4 * IMAGE_SIZES[SIZES.MD]}
                    />
                </> :
                <>
                    Window Mode
                </>
            }
        </>
    )
}