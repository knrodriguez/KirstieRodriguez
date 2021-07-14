import React from "react";
import { getMedia } from "../reducers/tv-and-movies";

const WIDE_BUBBLE_SRC = "assets/images/dream-bubble.png";
const ROUND_BUBBLE_SRC = "assets/images/thick-round-outline3.png";

export default ({ setOpenModal, setModalData }) => {

  async function handleClick(func, type) {
    const data = await func();
    console.log("res", data);
    setModalData({ data, type });
    setOpenModal(true);
  }

  return (
    <div class="aboutme-container">
      <div class="one-row title">
        <h1>INSIDE MY MIND</h1>
      </div>

      <div class="blue wide-bubble">
        <div class="wide-bubble">
          <img
            src={WIDE_BUBBLE_SRC}
            class='floating tv-and-movies'
            onClick={() => handleClick(getMedia, "media")}
          />
        </div>
      </div>

      <div class="red wide-bubble">
        <div class="wide-bubble center">
          <img
            src={WIDE_BUBBLE_SRC}
            class="center floating games"
            onClick={() => handleClick(getMedia, "media")}
          />
        </div>
      </div>

      <div class="green wide-bubble">
        <div class="wide-bubble">
          <img
            src={WIDE_BUBBLE_SRC}
            class='floating projects'
            onClick={() => handleClick(getMedia, "media")}
          />
        </div>
      </div>

      <div class='col3'>
        <div class="med-bubble">
          <img
            src={ROUND_BUBBLE_SRC}
            class='floating'
            // onClick={() => handleClick(getMedia, "media")}
          />
        </div>
      </div>

      <div>
        <div class="small-bubble">
          <img
            src={ROUND_BUBBLE_SRC}
            class='floating'
            onClick={() => handleClick(getMedia, "media")}
          />
        </div>
      </div>

      <div>
        <div class="small-bubble" style={{top: '50%'}}>
          <img
            src={ROUND_BUBBLE_SRC}
            class='floating'
            onClick={() => handleClick(getMedia, "media")}
          />
        </div>
      </div>
    
      <div>
        <div class="mini-bubble">
          <img
            src={ROUND_BUBBLE_SRC}
            class='floating'
            onClick={() => handleClick(getMedia, "media")}
          />
        </div>
      </div>

      <div class='me'></div>
    </div>
  );
};
