import React from 'react';
import Exercise from '../Exercise/Exercise';
import './Info.css';

import SelfInfo from './Selfinfo/SelfInfo';

const Info = () => {
    return (
        <div>
            <SelfInfo></SelfInfo>
            <Exercise></Exercise>


        </div>
    );
};

export default Info;