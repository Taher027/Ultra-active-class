import React from 'react';
import './Info.css'

const Info = () => {
    return (
        <div className='info'>
            <h2>Abu Taher Hossin</h2>
            <div className='right_self_info'>
                <div>
                    <h2>75 <sub className='subinfo'>kg</sub></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>6.5</h2>
                    <p>height</p>
                </div>
                <div>
                    <h2>25 <sub className='subinfo'>years</sub></h2>
                    <p>age</p>
                </div>
            </div>
        </div>
    );
};

export default Info;