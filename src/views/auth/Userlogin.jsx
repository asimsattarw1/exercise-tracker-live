import React, { Fragment, useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "../../css/auth.css";
import validator from "validator";

// import * as action from "../store/user/actions";
// import { useDispatch } from "react-redux";

const Userlogin = () => {
  // const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [alertDisplay, setAlertDisplay] = useState(false);

  setTimeout(() => {
    setAlertDisplay(false);
  }, 12000);

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

  const loginData = async () => {
    if (email && pwd.length >= 8) {
      try {
        // const user = await signInWithEmailAndPassword(auth, email, pwd);
        // dispatch(action.login(user));
        // setEmail("");
        // setPwd("");
      } catch (error) {
        window.scrollTo(0, 0);
        setAlertDisplay(true);
        setErrorMsg(
          "Firebase authentication error or check your internet connection"
        );
      }
    }
  };

  // const loginGoogle = async () => {
  //   try {
  //     const provider = new GoogleAuthProvider();
  //     const user = await signInWithPopup(auth, provider);
  //     dispatch(action.login(user));
  //   } catch (error) {
  //     console.log("this error:", error);
  //     window.scrollTo(0, 0);
  //     setAlertDisplay(true);
  //     setErrorMsg("Interruption error or check your internet connection");
  //   }
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Fragment>
      <div className="login-main-div">
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

        <div className="container-fluid login-inner-div">
          <div className="row shadow-lg login-form">
            {/* <div className="col-12 login-mono">
              <img src="images/zetra-logo.png" />
            </div> */}
            <div className="login-content">
              <div className="jubotron login-header mt-3">
                <h2>Welcome Back</h2>
                <p>Enter your credentials to access your account</p>
              </div>

              <div className="row login-content-row">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    loginData();
                  }}
                >
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-item mt-4">
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
                    <span class="input-group-text">
                      <LockIcon className="icons" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      style={{
                        borderTop: "1px solid lightgray",
                        borderBottom: "1px solid lightgray",
                        borderRight: "1px solid lightgray",
                        borderLeft: "none",
                      }}
                      placeholder="Password"
                      name="password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain atleast one  number, one uppercase and one lowercase letter, upto minimum 8 characters"
                      onChange={(e) => setPwd(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-item mt-3">
                    <button
                      type="submit"
                      className="form-control btn btn-lg btn-primary"
                    >
                      Login
                    </button>
                  </div>
                </form>

                <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-item">
                  <p style={{ color: "gray" }}>
                    If not registered?
                    <Link
                      style={{ marginLeft: "5px" }}
                      className="text-right text-primary"
                      to="/signup"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Userlogin;
