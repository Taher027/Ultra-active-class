import React from 'react';
import './Instrument.css'

const Instrument = (props) => {
    const { name, info, img, time } = props.instrument;
    return (
        <div className='instrument'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{info.slice(0, 80)}</p>
            <h2>{time}s</h2>
            <button className='btn'>
                Add to list
            </button>
        </div>
    );
};

export default Instrument;