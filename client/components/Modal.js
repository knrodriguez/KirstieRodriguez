import React, { useState, useEffect } from "react";
import MediaInfo from "./MediaInfo";

export default ({ data, type, closeModal }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const randIdx = Math.floor(Math.random() * data.length);
    setItem(data[randIdx]);
  }, []);

  function handleChange(e) {
    setItem(data[e.target.value]);
  }

  return (
    <div id="modal-container" onClick={closeModal}>
      <div id="modal-data-container">
        <select id="modal-dropdown" class="margin10" onChange={handleChange}>
          {data.length &&
            data.map((datum, idx) => (
              <option value={idx} selected={item.title === datum.title}>
                {datum.title}
              </option>
            ))}
        </select>
        <div id="modal-selection" class="flexbox width55 rounded-corners">
          {type === "media" && item.id && <MediaInfo data={item} />}
          {/* { type === 'game' && <MediaInfo data={data} /> }
              { type === 'code' && <MediaInfo data={data} /> } */}
        </div>
      </div>
    </div>
  );
};
