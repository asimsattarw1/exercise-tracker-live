import React, { useState, useEffect, Fragment } from "react";
import "../../css/auth.css";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import backgroundVideo from '../../assets/videos/vid3.mp4';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  const navigate = useNavigate();

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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postObj)
          };

          fetch('http://localhost:7000/user/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
              if (data?.status) {
                setEmail("");
                setPwd1("");
                setPwd2("");
                setName("");
                navigate("/login");
              }
              else {
                window.scrollTo(0, 0);
                setErrorMsg(data?.message);
                setAlertDisplay(true);
              }
            });
        } catch (error) {
          window.scrollTo(0, 0);
          setAlertDisplay(true);
          setErrorMsg(error);
        }
      }
    } else {
      window.scrollTo(0, 0);
      setErrorMsg("Password values does not match❌");
      setAlertDisplay(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (setAlertDisplay) {
        setAlertDisplay(false);
        window.scrollTo(0, 0);
      }
    }, 12000);
  }, [alertDisplay])

  // setTimeout(() => {
  //   if (setAlertDisplay) {
  //     setAlertDisplay(false);
  //   }
  // }, 12000);

  return (
    <Fragment>
      {/* <div className="signup-main-div"> */}
      <video className="background-vid" autoPlay loop muted>
        <source src={backgroundVideo} type='video/mp4' />
      </video>

        <div
          className="row alert alert-danger alert-dismissible"
          style={{
            display: alertDisplay ? "block" : "none",
            backgroundColor: "#F8D7DA",
            width: "100%",
            marginTop: "0px",
            marginLeft: "0px",
            marginRight: "0px",
          }}
        >
          <div className="col-12" style={{ display: "flex" }}>
            <div
              className="col-10"
              style={{ display: "flex", alignItems: "center" }}
            >
              <strong id="errMsg">{errorMsg}</strong>
            </div>
            <div
              className="col-2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <CloseIcon
                style={{ color: "gray", cursor: "pointer", float: "right" }}
                onClick={() => setAlertDisplay(false)}
              />
            </div>
          </div>
        </div>

        <div className="signup-inner-div">
          <div className="row signup-form">
            <div className="col-12">
              <div className="jubotron pt-4 signup-header">
                <h2 className="mt-4 g-0">Welcome Back</h2>
                <p>Enter your credentials to access your account</p>
              </div>
              <div className="signup-content g-0">
                <div className="row signup-content-row">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      signupData();
                    }}
                  >
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-item mt-4">
                      <span className="input-group-text">
                        <PersonIcon className="icons" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        pattern="[A-Za-z /s]{3,24}"
                        title="Name can only be in uppercase or lowercase non-numeric characters or in both and 3 to 24 character long"
                        value={name}
                        onChange={(e) => {
                          const name_regex = /^[a-zA-Z /s]*$/;
                          if (
                            name_regex.test(e.target.value) &&
                            e.target.value.length <= 24
                          ) {
                            setName(e.target.value);
                          } else {
                            e.preventDefault();
                          }
                        }}
                        style={{
                          borderTop: "1px solid lightgray",
                          borderBottom: "1px solid lightgray",
                          borderRight: "1px solid lightgray",
                          borderLeft: "none",
                        }}
                        required
                      />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-item mt-3">
                      <span className="input-group-text">
                        <EmailIcon className="icons" />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        style={{
                          borderTop: "1px solid lightgray",
                          borderBottom: "1px solid lightgray",
                          borderRight: "none",
                          borderLeft: "none",
                        }}
                        placeholder="Email"
                        name="email"
                        onChange={(e) => validateEmail(e)}
                        required
                      />
                      <span
                        className="input-group-text"
                        style={{
                          borderLeft: "none",
                          borderRight: "1px solid lightgray",
                          marginLeft: "-5px",
                          color: "green",
                        }}
                      >
                        {emailStatus}
                      </span>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-item mt-3">
                      <span className="input-group-text">
                        <LockIcon className="icons" />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain atleast one  number, one uppercase and one lowercase letter, upto minimum 8 characters"
                        value={pwd1}
                        onChange={(e) => setPwd1(e.target.value)}
                        style={{
                          borderTop: "1px solid lightgray",
                          borderBottom: "1px solid lightgray",
                          borderRight: "1px solid lightgray",
                          borderLeft: "none",
                        }}
                        required
                      />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-item mt-3">
                      <span className="input-group-text">
                        <LockIcon className="icons" />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        name="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain atleast one  number, one uppercase and one lowercase letter, upto minimum 8 characters"
                        value={pwd2}
                        onChange={(e) => setPwd2(e.target.value)}
                        style={{
                          borderTop: "1px solid lightgray",
                          borderBottom: "1px solid lightgray",
                          borderRight: "1px solid lightgray",
                          borderLeft: "none",
                        }}
                        required
                      />
                    </div>

                    <div className="row signup-btns mt-2">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12 signup-btn-div mt-3">
                        <button
                          type="submit"
                          className="form-control btn btn-lg btn-primary"
                        >
                          SignUp
                        </button>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-12 signup-cancelbtn-div">
                        <Link to="/login">
                          <button
                            type="submit"
                            className="form-control btn btn-lg mt-3 btn-warning"
                          >
                            Login
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </Fragment>
  );
};

export default Signup;
