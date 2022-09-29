import React, { useEffect, useState } from 'react';
import Instrument from '../../Instrument/Instrument';
import Info from '../Info/Info';
import './Home.css';
import img2 from '../../images/icon.png';

const Home = () => {

    const [instruments, setInstrument] = useState([]);

    const [instrumentsTime, setInstrumentTime] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInstrument(data))
    }, []);

    const handleAddToList = (instrument) => {
        const newTime = [...instrumentsTime, instrument];
        setInstrumentTime(newTime);
    }

    return (
        <div className='home'>

            <div className='home-main'>
                <div>
                    <div className='header_div'>
                        <img className='headerImg' src={img2} alt="" />
                        <h2>Body-Fit_Club</h2>
                    </div>
                </div>
                <div className="instrument_section">
                    {
                        instruments.map(instrument => <Instrument
                            key={instrument.id}
                            instrument={instrument}
                            handleAddToList={handleAddToList}

                        ></Instrument>)
                    }

                </div>
            </div>

            <div className="right_info_section">
                <Info instrumentsTime={instrumentsTime} ></Info>
            </div>

        </div>
    );
};

export default Home;