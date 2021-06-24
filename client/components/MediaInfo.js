import React from 'react';

export default ({data}) => {
    const {imgUrl, title, id, year, synopsis} = data;
    return (
        <>
            <img 
                class='round-left border-right'
                src={imgUrl} />
            <div id='modal-info' class='padding10'>
                <h3>{title}</h3>
                <h5>{year}</h5>
                <p>{synopsis}</p>
            </div>
        </>
    )
}