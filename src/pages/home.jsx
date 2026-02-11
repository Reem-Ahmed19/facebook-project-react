import React from 'react';
import Headerone from '../componants/header';
import './home.css';
import imgface from '../assets/pic/face.png';
import Confirmbtn from '../componants/confirm';
import Watch from '../componants/watch';
import UIUX from '../componants/uiux';
import Ali from '../componants/ali';
import Mind from '../componants/mind';

const Home = () => {
    return (
        <>
       <div className='headiv'>
        <img className='face' src={imgface} />
        <div className='gapping'>
            <Headerone />
            <Headerone />
            <Headerone />
            <Headerone />
        </div>
    </div>
    <div className='mainn'>
        <div className='sidebar'>
            <Confirmbtn />
            <div className='padd'>
            <Watch />
            <Watch />
            <Watch />
            <Watch />
            </div>
            <div>
                <div className='mtitle'>
                    <div className='title'>Title</div>
                    <div className='see'>See all</div>
                </div>
                <div className='ux'>
                    <UIUX />
                    <UIUX />
                    <UIUX />
                    <UIUX />
                </div>
            </div>
        </div>
        <div className='bb'>
        <div  className='float'>
        <div className='ee'>
            <Ali />
             <Ali />
              <Ali />
               <Ali />
        </div>
        
        </div>
        <div>
         <div>
            <Mind />
         </div>
         </div>
        </div>
        </div>
        </>
     );
}
 
export default Home;