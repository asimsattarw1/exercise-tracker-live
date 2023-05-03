import React, { useState, useEffect } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { imgArr } from '../../imgArr';
import OuterNavbar from '../../components/OuterNavbar';


import "../../css/auth.css";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import backgroundVideo from '../../assets/videos/vid3.mp4';
import img4 from '../../assets/images/img4.webp';
import Toast from '../../components/Toast';
import { alertDataAction, nullAlertDataAction } from '../../redux/store/exerciseReducer';
import { useDispatch } from 'react-redux';


const NewSignup = () => {
    const [bgImg, setBgImg] = useState(imgArr[0]);
    const [counter, setCounter] = useState(0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [alertDisplay, setAlertDisplay] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [emailStatus, setEmailStatus] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const signupData = async (e) => {
        e.preventDefault();
        if (pwd1 === pwd2 && pwd2.length >= 8) {
            if (name && email) {

                try {
                    const postObj = {
                        name: name,
                        email: email,
                        password: pwd1
                    }

                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(postObj)
                    };

                    fetch('http://localhost:7000/user/signup', requestOptions).then(response => response.json()).then(data => {
                        if (data?.status) {
                            dispatch(alertDataAction({ status: 'success', msg: data?.message, show: 'show' }));
                            setTimeout(() => {
                                dispatch(nullAlertDataAction());
                            }, 7000);
                            setEmail("");
                            setPwd1("");
                            setPwd2("");
                            setName("");
                            navigate("/login");
                        } else {
                            window.scrollTo(0, 0);
                            dispatch(alertDataAction({ status: 'error', msg: data?.message, show: 'show' }));
                            setTimeout(() => {
                                dispatch(nullAlertDataAction());
                            }, 7000)
                        }
                    });
                } catch (error) {
                    window.scrollTo(0, 0);
                    dispatch(alertDataAction({ status: 'success', msg: error, show: 'show' }));
                    setTimeout(() => {
                        dispatch(nullAlertDataAction());
                    }, 7000)
                }
            }
        } else {
            window.scrollTo(0, 0);
            dispatch(alertDataAction({ status: 'error', msg: 'Password values does not match', show: 'show' }));
            setTimeout(() => {
                dispatch(nullAlertDataAction());
            }, 7000)
        }
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (setAlertDisplay) {
    //             setAlertDisplay(false);
    //             window.scrollTo(0, 0);
    //         }
    //     }, 12000);
    // }, [alertDisplay])


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
                    <div className='d-flex justify-content-end w-100 pe-4'>
                        <Toast status='danger' msg='this is toast msg' show='show' />
                    </div>
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
                            minHeight: '100vh',
                            width: '100%'
                        }
                    }>
                    <div className='row w-50 h-auto p-5 bg-light'
                        style={
                            { borderRadius: '7px' }
                        }>
                        <div className='col-5 d-flex align-items-center'>
                            <img src={img4}
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
                                <h1>SIGNUP</h1>
                                <h2>Welcome Back</h2>
                                <h6>Enter your credentials to create account</h6>
                            </div>
                            <form onSubmit={signupData}>
                                <div className="input-group my-3 input-group-lg">
                                    <span className="input-group-text"><PersonIcon /></span>
                                    <input type="text" className="form-control" placeholder="Name" name="name" pattern="[A-Za-z /s]{3,24}" title="Name can only be in uppercase or lowercase non-numeric characters or in both and 3 to 24 character long"
                                        value={name}
                                        onChange={
                                            (e) => {
                                                const name_regex = /^[a-zA-Z /s]*$/;
                                                if (name_regex.test(e.target.value) && e.target.value.length <= 24) {
                                                    setName(e.target.value);
                                                } else {
                                                    e.preventDefault();
                                                }
                                            }
                                        }
                                        required />
                                </div>

                                <div className="input-group mb-3 input-group-lg">
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

                                <div className="input-group mb-3 input-group-lg">
                                    <span className="input-group-text"><LockIcon /></span>
                                    <input type="password" className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        title="Must contain atleast one  number, one uppercase and one lowercase letter, upto minimum 8 characters"
                                        value={pwd1}
                                        onChange={
                                            (e) => setPwd1(e.target.value)
                                        }
                                        required />
                                </div>

                                <div className="input-group mb-4 input-group-lg">
                                    <span className="input-group-text"><LockIcon /></span>
                                    <input type="password" className="form-control"
                                        placeholder="Confirm password"
                                        name="password"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        title="Must contain atleast one  number, one uppercase and one lowercase letter, upto minimum 8 characters"
                                        value={pwd2}
                                        onChange={(e) => setPwd2(e.target.value)}
                                        required />
                                </div>

                                <div className="input-group input-group-lg d-flex justify-content-center">
                                    <button type="submit" className="btn btn-dark">SIGNUP</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
export default NewSignup;
