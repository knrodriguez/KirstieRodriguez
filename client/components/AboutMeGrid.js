import React from "react";
import { getMedia, getGames } from "../reducers";

const WIDE_BUBBLE_SRC = "assets/images/dream-bubble.png";
const ROUND_BUBBLE_SRC = "assets/images/thick-round-outline3.png";

export default ({ setOpenModal, setModalData }) => {

  async function handleClick(func, type) {
    const data = await func();
    setModalData({ data, type });
    setOpenModal(true);
  }

  return (
    <div class="aboutme-container">
      <div class="one-row title">
        <h1>INSIDE KIRSTIE'S MIND</h1>
      </div>

      <div class='wide-bubble floating'>
        <img src={WIDE_BUBBLE_SRC} />
        <img style={{
          position: 'absolute',
          zIndex: 2,
          maxWidth: '45%',
          bottom: '8%'
        }}
        src='assets/images/tv.gif'/>
      </div>

      {/* <div class="wide-bubble floating" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr',
      }}>
        <div style={{
          gridColumnStart: '1',
          gridRowStart: '1',
          zIndex: '2',
          width: '65%',
          textAlign: 'center',
          marginBottom: '5%'
        }}
        onClick={() => handleClick(getMedia, "media")}>
          <img src='assets/images/tv.gif'/>
        </div>
        
        <div class="wide-bubble" style={{
          gridColumnStart: '1',
          gridRowStart: '1'
        }}>
          <img
            src={WIDE_BUBBLE_SRC}
            class='tv-and-movies'
            onClick={() => handleClick(getMedia, "media")}
          />
        </div>
      </div> */}

      <div class="wide-bubble center floating" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr',
      }} >
        <div class='center' style={{
          gridColumnStart: '1',
          gridRowStart: '1',
          zIndex: '2',
          maxWidth: '50%',
          width: '35%',
          textAlign: 'center',
          marginBottom: '5%',
        }}
        onClick={() => handleClick(getGames, "game")}>
          <img src='assets/images/game.gif'/>
        </div>
        
        <div class="wide-bubble" style={{
          gridColumnStart: '1',
          gridRowStart: '1'
        }}>
          <img
            src={WIDE_BUBBLE_SRC}
            class='center games'
            onClick={() => handleClick(getGames, "game")}
          />
        </div>
      </div>

      <div class="wide-bubble floating" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr'
      }}>
        <div style={{
          gridColumnStart: '1',
          gridRowStart: '1',
          zIndex: '2',
          width: '100%',
          textAlign: 'center'
        }}
        onClick={() => handleClick(getMedia, "media")}>
          <img src='assets/images/coding.gif'/>
        </div>
        
        <div class="wide-bubble" style={{
          gridColumnStart: '1',
          gridRowStart: '1'
        }}>
          <img
            src={WIDE_BUBBLE_SRC}
            class='projects'
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
