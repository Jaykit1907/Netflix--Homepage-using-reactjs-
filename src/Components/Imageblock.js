import React from 'react';
import './Imageblock.css';

function Imageblock(props) {

    return (<>
        <div class="maincontainer">
            <h1 className="heading1">{props.heading}</h1>
            <div className='container2'>
                <div className='image_container'>
                    <img src={props.imgsrc1} />
                    <p>{props.title1}</p>
                </div>
                <div className='image_container'>
                    <img src={props.imgsrc2} />
                    <p>{props.title2}</p>
                </div>
                <div className='image_container'>
                    <img src={props.imgsrc3} />
                    <p>{props.title3}</p>
                </div>
                <div className='image_container'>
                    <img src={props.imgsrc4} />
                    <p>{props.title4}</p>
                </div>


            </div>
        </div>



    </>);

};
export default Imageblock;