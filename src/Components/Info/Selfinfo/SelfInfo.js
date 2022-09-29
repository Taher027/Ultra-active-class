import React from 'react';
import './SelfInfo.css';
import img1 from '../../../images/taher (1).jpg'

const SelfInfo = () => {
    return (
        <div className='info'>
            <div className='selfInf'>
                <img className='info_img' src={img1} alt="" />
                <h2 className='selfInf_heading'>Abu Taher Hossin</h2>
            </div>
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

export default SelfInfo;