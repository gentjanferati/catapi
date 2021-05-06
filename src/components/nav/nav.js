import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ()=>{
    return(
        <div>
            <Link to="/upload" style={{ textDecoration: 'none', color: 'black' }}>
                Upload
            </Link>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                Home
            </Link>
        </div>
    )
}

export default Nav;