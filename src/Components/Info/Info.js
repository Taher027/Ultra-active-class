import React from 'react';
import Exercise from '../Exercise/Exercise';
import './Info.css';

import SelfInfo from './Selfinfo/SelfInfo';

const Info = (props) => {

    return (
        <div>
            <SelfInfo></SelfInfo>
            <Exercise instrumentsTime={props.instrumentsTime}></Exercise>


        </div>
    );
};

export default Info;