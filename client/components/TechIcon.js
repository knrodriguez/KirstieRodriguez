import React from 'react';

export default (props) => {
    const {iconPath, name, description, docLink} = props;
    
    return(
        <div class="tech-stack-item">
            <div class='tech-stack-icon-container flex-center'>
                <img src={`assets/images/tech-stack/${iconPath}`} />
            </div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{docLink}</p>
        </div>
    )
}