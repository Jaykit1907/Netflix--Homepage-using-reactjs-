import React from 'react';

import './Headnav.css';



function Headnav() {

    return (<>
        <nav className='navbar'>
            <div className='heading'>
                <h1>NETFLIX</h1>
            </div>
            <div className='navbar1'>
                <p>UNLIMITED TV SHOWS & MOVIES</p>
                <button className='join_button'>Join now</button>
                <button className="signup_button">Sign In</button>
            </div>
        </nav>
    </>

    );
};

export default Headnav;