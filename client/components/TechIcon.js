import React from 'react';

export default (props) => {
    const {iconPath, name, docLink} = props;
    
    function handleClick(){
        window.open(docLink, "_blank")
    }

    return(
        <div class="tech-stack-item">
            <div class='tech-stack-item-content' onClick={handleClick}>
                <div class='tech-stack-icon-container flex-center'>
                    <img src={`assets/images/tech-stack/${iconPath}`} alt={`${name}-logo`}/>
                </div>
                <p>{name}</p>
            </div>
        </div>
    )
}