import React from 'react';

export default (props) => {
    const {iconPath, name, description, docLink} = props;
    
    return(
        <div class="tech-stack-item">
            <img src={`assets/images/tech-stack/${iconPath}`} />
            <p>{name}</p>
            <p>{description}</p>
            <p>{docLink}</p>
        </div>
    )
}