import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name, details, age, time, image} = props.e;

    return (
        <div className='card'>
            <img src={image} alt="im" />
            <h2>{name}</h2>
            <p>{details}</p>
            <p>Age: {age}</p>
            <p>Time: {time}</p>
            <button className='btn' onClick={() => props.gymHandler(time)}>Select It</button>
        </div>
    );
};

export default Card;