import React from 'react';
import alipic from '../assets/pic/ali-pic.png';
import pfp from '../assets/pic/pfp.png';
import './ali.css';
const Ali = () => {
    return ( 
    <>
    <div className='rec'>
        <img src={alipic} />
        <div className='oo'>
            <img src={pfp} />
            <div>Islam Ali</div>
        </div>
    </div>
    
    </> );
}
 
export default Ali;