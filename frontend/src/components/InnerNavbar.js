import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/home.css';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import DvrIcon from '@mui/icons-material/Dvr';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutAction } from '../redux/store/exerciseReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

const InnerNavbar = () => {
    const [cookies, removeCookie] = useCookies(["user"]);
    const dispatch = useDispatch();
    const store = useSelector(state => state.user?.user);

    const logout = async () => {
        await removeCookie('user', { path: '/' })
        dispatch(logoutAction());
    }

    return (
        <ul className="nav flex-column mt-5">
            <li className="nav-item d-flex">
                <div>
                    <h2 className='text-success'>Exercise Tracker</h2>
                </div>
            </li>

            <li className="nav-item d-flex mt-2">
                <NavLink className="nav-link w-100 text-dark" to="/"> <HomeIcon color="success" /><span className='ms-3'>Home</span> </NavLink>
            </li>
            <li className="nav-item d-flex">
                <NavLink className="nav-link w-100 text-dark" to="/all-record">  <Person2Icon color="success" /><span className='ms-3'>Record</span></NavLink>
            </li>
            <li className="nav-item d-flex">
                <NavLink className="nav-link w-100 text-dark" to="#"><DvrIcon color="success" /><span className='ms-3'>Profile</span></NavLink>
            </li>

            <li className="nav-item d-flex mt-4" onClick={logout}>
                <NavLink className="nav-link w-100 text-danger" to="#"><LogoutIcon color="danger" />
                    <span className='text- ms-3'>Logout</span>
                </NavLink>
            </li>

            <hr/>

            <ul className='mt-5'>
               <li>
               <h2 className='text-primary mx-5'>{store?.name}</h2>
                <p className='text-muted'>({store?.email})</p>
               </li>    
            </ul>
        </ul>
    )
}

export default InnerNavbar
