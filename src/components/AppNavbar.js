import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import { logoutAction } from '../redux/store/exerciseReducer';

export default function AppNavbar() {
    const [cookies, removeCookie] = useCookies(["user"]);
    const dispatch = useDispatch();

    const logout = async () => {
        await removeCookie('user', { path: '/' })
        dispatch(logoutAction());
    }


    return (
        <div className='d-flex justify-content-between w-100 shadow-lg'>
            <ul className='mb-0 w-100'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/activity-record">Record</NavLink></li>
            </ul>
            <button className='btn btn-outline-danger' onClick={logout}>Logout</button>
        </div>
    );
}
