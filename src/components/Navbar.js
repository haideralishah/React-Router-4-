import React from 'react';
import {
    Link
} from 'react-router-dom';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" >Audience Poll</a>
                </div>
                <ul className="nav navbar-nav">
                    <li> <Link to='/'> Create Poll</Link></li>
                    <li> <Link to='/about'> Previous Poll</Link></li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Navbar;