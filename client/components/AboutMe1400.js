import React, { useRef, useState, useEffect } from "react";

import { ThoughtBubble } from ".";
import {
  CONSTS,
  getImgPath,
  IMAGE_SIZES,
  IMAGE_SIZES_PERCS,
} from "../reducers/constants";
import { getMedia } from "../reducers";

export default ({ setOpenModal, setModalData }) => {
  const { SIZES, TYPES } = CONSTS;
  const headImage = getImgPath("2external-content.duckduckgo.com.jpg");
  const headRef = useRef(null);
  const [headWidth, setHeadWidth] = useState(0);
  const [headHeight, setHeadHeight] = useState(0);
  const [desktopMode, setDesktopMode] = useState(false);
  const [headWidthPerc, setHeadWidthPerc] = useState(0);
  const [headHeightPerc, setHeadHeightPerc] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleImageLoad);
    return () => window.removeEventListener("resize", handleImageLoad);
  }, []);

  function handleImageLoad(e) {
    const { clientWidth, clientHeight } = e.target;
    setHeadWidth(clientWidth);
    setHeadHeight(clientHeight);
    setHeadWidthPerc((clientWidth / window.innerWidth) * 100);
    setHeadHeightPerc((clientHeight / window.innerHeight) * 100);
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
      <div style={{ positon: "block", width: "100vw", height: "100vh" }}>
        <img
          id="head-image"
          src={headImage}
          ref={headRef}
          onLoad={handleImageLoad}
          onResize={handleImageLoad}
          style={{ height: "50%", maxWidth: "33%" }}
        />
        <ThoughtBubble
          size={SIZES.MICRO}
          type={TYPES.ROUND}
          bottom={0.8 * headHeightPerc}
          left={headWidthPerc}
        />
        <ThoughtBubble
          size={SIZES.MICRO}
          type={TYPES.ROUND}
          bottom={0.65 * headHeightPerc}
          left={headWidthPerc + 1.5 * IMAGE_SIZES_PERCS[SIZES.MICRO]}
        />
        <ThoughtBubble
          size={SIZES.MINI}
          type={TYPES.ROUND}
          bottom={0.4 * headHeightPerc}
          left={headWidthPerc + 2 * IMAGE_SIZES_PERCS[SIZES.MICRO]}
        />
        <ThoughtBubble
          size={SIZES.SM}
          type={TYPES.ROUND}
          bottom={0.18 * headHeightPerc}
          left={headWidthPerc + 1.75 * IMAGE_SIZES_PERCS[SIZES.MINI]}
        />
        <ThoughtBubble
          size={SIZES.SM}
          type={TYPES.ROUND}
          bottom={0.04 * headHeightPerc}
          left={headWidthPerc + 2.75 * IMAGE_SIZES_PERCS[SIZES.SM]}
        />
      </div>
      <ThoughtBubble
        size={SIZES.MD}
        type={TYPES.WIDE}
        bottom={0.05 * headHeightPerc}
        left={headWidthPerc + 0.8 * IMAGE_SIZES_PERCS[SIZES.MD]}
        onClick={() => handleClick(getMedia, "media")}
        id="tv-and-movies"
      />
      <ThoughtBubble
        size={SIZES.MD}
        type={TYPES.WIDE}
        bottom={0.4 * headHeightPerc}
        left={headWidthPerc + 2 * IMAGE_SIZES_PERCS[SIZES.MD]}
        id="games"
      />
      <ThoughtBubble
        size={SIZES.MD}
        type={TYPES.WIDE}
        bottom={1.3 * headHeightPerc}
        left={headWidthPerc + 2.5 * IMAGE_SIZES_PERCS[SIZES.MD]}
      />
    </>
  );
};
