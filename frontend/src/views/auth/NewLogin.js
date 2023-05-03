import React, { useState, useEffect } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { imgArr } from '../../imgArr';
import OuterNavbar from '../../components/OuterNavbar';

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import "../../css/auth.css";
import validator from "validator";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { userDataAction, alertDataAction, nullAlertDataAction } from "../../redux/store/exerciseReducer";
import backgroundVideo from '../../assets/videos/vid3.mp4';
import img3 from '../../assets/images/img3.gif';
import Toast from '../../components/Toast';

const NewLogin = () => {
    const [bgImg, setBgImg] = useState(imgArr[0]);
    const [counter, setCounter] = useState(0);

    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState("");
    const [pwd, setPwd] = useState("");
    const [msg, setMsg] = useState("");
    const [alert, setAlert] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const dispatch = useDispatch();
    // const myStore = useSelector((state) => state.exerciseReducer);
    const navigate = useNavigate();
    const dateNow = new Date().toLocaleDateString();

    const validateEmail = (e) => {
        const email = e.target.value;
        if (validator.isEmail(email)) {
            setEmailStatus("✔");
            setEmail(email);
        } else {
            if (email) {
                setEmailStatus("❌");
            } else {
                setEmailStatus("");
            }
        }
    };

    const loginData = async (e) => {
        e.preventDefault();

        if (pwd.length >= 8 && email) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        { email: email, password: pwd }
                    )
                };

                fetch('http://localhost:7000/user/login', requestOptions).then(response => response.json()).then(data => {
                    console.log('data:',data);
                    if (data?.status) {
                        dispatch(alertDataAction({ status: 'success', msg: data?.message, show: 'show' }));
                        setTimeout(() => {
                            dispatch(nullAlertDataAction());
                        }, 7000)

                        setCookie("jwt", `${data?.token
                            }`, { path: "/" });
                        setCookie("date", new Date().toLocaleDateString(), { path: "/" });
                        navigate('/');
                        setEmail("");
                        setPwd("");
                        dispatch(userDataAction(data));
                    }
                    else{
                        dispatch(alertDataAction({ status: 'error', msg: data?.message, show: 'show' }));
                        setTimeout(() => {
                            dispatch(nullAlertDataAction());
                        }, 7000)
                    }
                });
            } catch (error) {
                window.scrollTo(0, 0);
                dispatch(alertDataAction({ status: 'danger', msg: error, show: '' }));
                setTimeout(() => {
                    dispatch(nullAlertDataAction());
                }, 7000)
            }
        }
    };


    // setInterval(() => {
    //     setBgImg(imgArr[counter]);
    //     if (counter == imgArr.length - 1) {
    //         setCounter(0);
    //     } else {
    //         setCounter(counter + 1);
    //     }
    // }, 4000);

    return (
        <div>
            <header>
                <div className="header-area header-transparent">
                    <OuterNavbar />
                    {/* <div className='d-flex justify-content-end w-100 pe-4'>
                        <Toast status='danger' msg={msg} show={alert ? 'show' : ''} />
                    </div> */}
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center"></div>
                        </div>
                    </div>
                </div>
                {/* Header End */} </header>
            <main> {/*? slider Area Start*/}
                <div className="slider-area position-relative d-flex justify-content-center align-items-center mt-5"
                    style={
                        {
                            backgroundImage: `url('${bgImg}')`,
                            height: '100vh',
                            width: '100%'
                        }
                    }>
                    <div className='row w-50 h-auto p-5 bg-light'
                        style={
                            { borderRadius: '7px' }
                        }>
                        <div className='col-5 d-flex align-items-center'>
                            <img src={img3}
                                alt='no image'
                                style={
                                    {
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        display: 'block'
                                    }
                                } />
                        </div>
                        <div className='col-7'>
                            <div className="jubotron login-header mt-3">
                                <h1>LOGIN</h1>
                                <h2>Welcome Back</h2>
                                <h6>Enter your credentials to access your account</h6>
                            </div>
                            <form onSubmit={loginData}>
                                <div className="input-group my-3 input-group-lg">
                                    <span className="input-group-text"><EmailIcon /></span>
                                    <input type="email" className="form-control" placeholder="Email" name="email"
                                        style={{ borderRight: "none" }}
                                        onChange={
                                            (e) => validateEmail(e)
                                        }
                                        required />
                                    <span className="input-group-text"
                                        style={
                                            {
                                                borderLeft: "none",
                                                borderRight: "1px solid lightgray",
                                                marginLeft: "-5px",
                                                color: "green"
                                            }
                                        }>
                                        {emailStatus} </span>
                                </div>

                                <div className="input-group mb-4 input-group-lg">
                                    <span className="input-group-text"><LockIcon /></span>
                                    <input type="password" className="form-control" placeholder="Password" name="password"
                                        value={pwd}
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        title="Must contain atleast one  number, one uppercase and one lowercase letter, upto minimum 8 characters"
                                        onChange={
                                            (e) => setPwd(e.target.value)
                                        }
                                        required />
                                </div>

                                <div className="input-group mb input-group-lg d-flex justify-content-center">
                                    <button type="submit" className="btn btn-dark">Login</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
export default NewLogin;
