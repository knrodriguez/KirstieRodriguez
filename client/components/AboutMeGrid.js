import React, {useEffect} from "react";
import { getMedia, getGames } from "../reducers";

const WIDE_BUBBLE_SRC = "assets/images/dream-bubble.png";
const ROUND_BUBBLE_SRC = "assets/images/thick-round-outline3.png";

export default ({ setOpenModal, setModalData, setCoding }) => {

  async function handleClick(e, func, type) {
    const data = await func();
    setModalData({ data, type });
    setOpenModal(true);
  }

  return (
    <div class="aboutme-container">
      <div class="one-row title">
        <h1>INSIDE KIRSTIE'S MIND</h1>
      </div>

      <div class='bottom-row floating black flex-center'
         onClick={(e) => handleClick(e, getMedia, 'media')}
      >
        <div class='cloud flex-center'>
          <img src={WIDE_BUBBLE_SRC} />
        </div>

        <div class='overlay flex-center'>
            <img id='media' src='assets/images/tv.gif'/>
        </div>
      </div>

      <div class='top-row floating green flex-center'
        onClick={() => handleClick(getGames, 'media')}
      >
        <div class='cloud flex-center'>
          <img src={WIDE_BUBBLE_SRC} />
        </div>

        <div class='overlay flex-center'>
          <img id='game' src='assets/images/game.gif'/>
        </div>
      </div>
      
      <div class='bottom-row floating flex-center'
       onClick={() => setCoding(true)}
      >
        <div class='cloud flex-center'>
          <img src={WIDE_BUBBLE_SRC} />
        </div>

        <div class='overlay flex-center'>
          <img id='coding' src='assets/images/coding.gif'/>
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

      <div id='row10' class="small-bubble">
        <img
          src={ROUND_BUBBLE_SRC}
          class='floating'
          onClick={() => handleClick(getMedia, "media")}
        />
      </div>

      <div id='row11' class="small-bubble" style={{top: '50%'}}>
        <img
          src={ROUND_BUBBLE_SRC}
          class='floating'
          onClick={() => handleClick(getMedia, "media")}
        />
      </div>

      <div id='row12' class="mini-bubble">
        <img
          src={ROUND_BUBBLE_SRC}
          class='floating'
          onClick={() => handleClick(getMedia, "media")}
        />
      </div>

      <div class='me'></div>
    </div>
  );
};
