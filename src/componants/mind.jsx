import React from 'react';
import './mind.css';
import mindpfp from '../assets/pic/mindpfp.png';
import live from '../assets/pic/Vector.png';
import pic from '../assets/pic/Vector-1.png';
import feel from '../assets/pic/Vector-2.png';

const Mind = () => {
    return ( <>
    <div className='tt'>
        <div className='mm'>
            <img src={mindpfp} />
            <div className='ww'>
                <div className='kk'> What’s on your mind, Jenny</div>
            </div>
            <div>
                <div className='aa'>
                    <img src={live} />
                    <div>Live video</div>
                </div>
                <div>
                    <img src={pic} />
                    <div>Photo/video</div>
                </div>
                <div>
                    <img src={feel} />
                    <div>Feeling/activity</div>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Mind;