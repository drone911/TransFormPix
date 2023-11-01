import React from 'react';

function ImageCard(content) {

    return (
        <div className='card-container'>
            <h2>ImageCard</h2>
            <p>{content.name}</p>
            
        </div>
    )
}

export default ImageCard;