import React from 'react';

export default function Card(props) {
    const {imgUrl, title, id, onCardClick} = props;
    return (
        <div className='card' onClick={() => onCardClick(id)}>
            <img src={imgUrl} alt={title} />
            <div className='card-title-container'>
                <span className='card-title'>{title.toUpperCase()}</span>
            </div>
        </div>
    )
}


