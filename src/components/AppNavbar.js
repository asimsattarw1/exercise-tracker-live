import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

export default function AppNavbar() {
    return (
        <div className='row shadow-lg'>
            <ul className='mb-0'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/activity-record">Record</NavLink></li>
            </ul>
        </div>
    );
}
