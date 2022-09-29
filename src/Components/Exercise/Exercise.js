import React from 'react';
import './Exercise.css'

const Exercise = () => {
    return (
        <div>
            <h2 className='heading_break'>Add A Break</h2>
            <div className='timebtn_div'>
                <button className='timerbtn'>10 <span>s</span></button>
                <button className='timerbtn'>20 <span>s</span></button>
                <button className='timerbtn'>30 <span>s</span></button>
                <button className='timerbtn'>40 <span>s</span></button>
                <button className='timerbtn'>50 <span>s</span></button>
            </div>
            <h2 className='heading_break'>Exercise details</h2>

            <p className='timeSectionP'><span className='exercise_time' >Exercise Time</span>0 <span>seconds</span></p>
            <p className='timeSectionP'><span className='Break_time' >Break Time</span>0 <span>seconds</span></p>

        </div>
    );
};

export default Exercise;