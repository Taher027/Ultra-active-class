import React, { useEffect, useState } from 'react';
import Instrument from '../../Instrument/Instrument';
import Info from '../Info/Info';
import './Home.css'

const Home = () => {
    const [instruments, setInstrument] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInstrument(data))
    }, [])
    return (
        <div className='home'>

            <div className='home-main'>
                <div>
                    <div className='header_div'>
                        <img src="" alt="" />
                        <h2>Body-Fit_Club</h2>
                    </div>
                </div>
                <div className="instrument_section">
                    {
                        instruments.map(instrument => <Instrument
                            key={instrument.id}
                            instrument={instrument}

                        ></Instrument>)
                    }

                </div>
            </div>

            <div className="right_info_section">
                <Info></Info>
            </div>

        </div>
    );
};

export default Home;