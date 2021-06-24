import React, {useState} from 'react';
import MediaInfo from './MediaInfo';

export default ({modalData: {data, type}}) => {
    const [item, setItem] = useState({});
    
    function handleChange (e){
        setItem(data[e.target.value])
    }

    return (
        <div id='modal-container'>
            <div id='modal-data-container'>
                <select id='modal-dropdown' 
                    onChange={handleChange}
                    class='margin10'
                >
                    {
                        data.length && 
                        data.map((item, idx) => (
                            <option value={idx}>{item.title}</option>
                        ))
                    }
                </select>
                <div id='modal-selection' 
                    class='flexbox width55 rounded-corners'
                >
                    { type === 'media' && item.id && <MediaInfo data={item} /> }
                    {/* { type === 'game' && <MediaInfo data={data} /> }
                    { type === 'code' && <MediaInfo data={data} /> } */}
                </div>
            </div>
        </div>
    )
}