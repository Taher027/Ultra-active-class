import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { instrumentsTime } = props;
    let total = 0;
    for (const singleInstrumentTime of instrumentsTime) {
        total = total + singleInstrumentTime.time;
    }
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

            <p className='timeSectionP'><span className='exercise_time' >Exercise Time</span>{total} <span>seconds</span></p>
            <p className='timeSectionP'><span className='Break_time' >Break Time</span>0 <span>seconds</span></p>
            <button className='activity_btn'>
                Activity Completed
            </button>

        </div>
    );
};

export default Exercise;