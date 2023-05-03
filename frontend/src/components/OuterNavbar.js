import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Link, NavLink} from 'react-router-dom';

const OuterNavbar = () => {
    return (
        <nav className="w-100 shadow-lg navbar navbar-expand navbar-light bg-light px-4"
            style={{position: 'fixed'}}
            >
            <a className="navbar-brand" href="#">
                <Link to='/'>
                    <h2 className='text-success'>Exercise Tracker</h2>
                </Link>
            </a>


            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                <form className="form-inline my-2 my-lg-0 d-none d-sm-block">
                    <NavLink to='/login'>
                        <button className="loginbtn btn btn-outline-success my-2 my-sm-0 me-4" type="submit">Login</button>
                    </NavLink>
                    <NavLink to='/signup'>
                        <button className="signupbtn btn btn-outline-danger my-2 my-sm-0" type="submit">Signup</button>
                    </NavLink>
                </form>

                <div className="dropdown d-sm-none">
                    <MoreVertIcon data-toggle="dropdown"/> {/* </button> */}
                    <ul className="shadow-lg dropdown-menu">
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default OuterNavbar
