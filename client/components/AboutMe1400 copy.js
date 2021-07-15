import React, { useRef, useState } from "react";

import { ThoughtBubble } from ".";
import { CONSTS, getImgPath, IMAGE_SIZES } from "../reducers/constants";
import { getMedia } from "../reducers";

export default (props) => {
  const { SIZES, TYPES } = CONSTS;
  const headImage = getImgPath("2external-content.duckduckgo.com.jpg");
  const headRef = useRef(null);
  const [headWidth, setHeadWidth] = useState(0);
  const [headHeight, setHeadHeight] = useState(0);
  const [desktopMode, setDesktopMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [headWidthPerc, setHeadWidthPerc] = useState(0);
  const [headHeightPerc, setHeadHeightPerc] = useState(0);

  // useEffect( () => {
  //     setDesktopMode(window.matchMedia("(min-width: 1500px)").matches)
  // }, [])

  // function resize (){
  //     setDesktopMode(window.matchMedia("(min-width: 1500px)").matches)
  // }

  function handleImageLoad(e) {
    setHeadWidth(e.target.clientWidth);
    setHeadHeight(e.target.clientHeight);
    setHeadWidthPerc((e.target.clientWidth / window.innerWidth) * 100);
    setHeadWidthPerc((e.target.clientHeight / window.innerHeight) * 100);
  }

  async function handleClick(getFunc, type) {
    const data = await getFunc();
    setModalData({ data, type });
    setOpenModal(true);
  }

  function closeModal(e) {
    if (e.target.id === "modal-container") {
      setOpenModal(false);
    }
  }

  return (
    <>
      <div>
        <img
          id="head-image"
          src={headImage}
          ref={headRef}
          onLoad={handleImageLoad}
          style={{ height: "50%", maxWidth: "33%" }}
        />
        <ThoughtBubble
          size={SIZES.MICRO}
          type={TYPES.ROUND}
          bottom={0.8 * headHeight}
          left={headWidth}
        />
        <ThoughtBubble
          size={SIZES.MICRO}
          type={TYPES.ROUND}
          bottom={0.65 * headHeight}
          left={headWidth + 1.5 * IMAGE_SIZES[SIZES.MICRO]}
        />
        <ThoughtBubble
          size={SIZES.MINI}
          type={TYPES.ROUND}
          bottom={0.4 * headHeight}
          left={headWidth + 2 * IMAGE_SIZES[SIZES.MICRO]}
        />
        <ThoughtBubble
          size={SIZES.SM}
          type={TYPES.ROUND}
          bottom={0.1 * headHeight}
          left={headWidth + 1.75 * IMAGE_SIZES[SIZES.MINI]}
        />
        <ThoughtBubble
          size={SIZES.SM}
          type={TYPES.ROUND}
          bottom={0.04 * headHeight}
          left={headWidth + 2.5 * IMAGE_SIZES[SIZES.SM]}
        />
      </div>
      <ThoughtBubble
        size={SIZES.MD}
        type={TYPES.WIDE}
        bottom={0.1 * headHeight}
        left={headWidth + 3.75 * IMAGE_SIZES[SIZES.SM]}
      />
      <ThoughtBubble
        size={SIZES.MD}
        type={TYPES.WIDE}
        bottom={0.4 * headHeight}
        left={headWidth + 3.3 * IMAGE_SIZES[SIZES.MD]}
      />
      <ThoughtBubble
        size={SIZES.MD}
        type={TYPES.WIDE}
        bottom={1.4 * headHeight}
        left={headWidth + 4 * IMAGE_SIZES[SIZES.MD]}
        onClick={() => handleClick(getMedia, "media")}
      />
    </>
  );
};
