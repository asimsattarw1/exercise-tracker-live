import React, { useState, useEffect ,Fragment } from "react";
import "../../css/auth.css";
import { Link } from "react-router-dom";
// import {
//   createUserWithEmailAndPassword,
//   fetchSignInMethodsForEmail,
// } from "firebase/auth";
// import { auth } from "../firebase/authentication";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CloseIcon from "@mui/icons-material/Close";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const Usersignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
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
    // if (pwd1 === pwd2 && pwd2.length >= 8) {
    //   if (name && email && phone && city) {
    //     const fetch_email = await fetchSignInMethodsForEmail(auth, email);
    //     if (fetch_email.length > 0) {
    //       window.scrollTo(0, 0);
    //       setAlertDisplay(true);
    //       setErrorMsg("This email account already exists❌");
    //     } else {
    //       try {
    //         const user = await createUserWithEmailAndPassword(
    //           auth,
    //           email,
    //           pwd2,
    //           phone,
    //           city
    //         );
    //         setEmail("");
    //         setPwd1("");
    //         setPwd2("");
    //         setPhone("");
    //         setCity("");
    //         alert("Signup Successfull✔");
    //         navigate("/");
    //       } catch (error) {
    //         if ((error = "NETWORK_REQUEST_FAILED")) {
    //           window.scrollTo(0, 0);
    //           setAlertDisplay(true);
    //           setErrorMsg("Internet Disconnected😭");
    //         } else {
    //           window.scrollTo(0, 0);
    //           setAlertDisplay(true);
    //           setErrorMsg("Firebase Internal Error");
    //         }
    //       }
    //     }
    //   }
    // } else {
    //   window.scrollTo(0, 0);
    //   setErrorMsg("Password values does not match❌");
    //   setAlertDisplay(true);
    // }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  setTimeout(() => {
    if (setAlertDisplay) {
      setAlertDisplay(false);
    }
  }, 12000);

  return (
    <Fragment>
      <div className="signup-main-div">
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
          {/* <div className="row">
            <div className="col-12 signup-mono">
              <img src="images/zetra-logo.png" />
            </div>
          </div> */}

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
                        placeholder="Re-enter password"
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

                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-item mt-3">
                      <span className="input-group-text">
                        <PhoneIcon className="icons" />
                      </span>
                      <span
                        className="input-group-text"
                        style={{ borderLeft: "none", color: "black" }}
                      >
                        +92
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="3xxxxxxxxx"
                        name="phone"
                        pattern="[3][0-9]{9}"
                        Title="You only have write remaining 10 numbers starting with 3."
                        value={phone}
                        onChange={(e) => {
                          const phone_regex = /^[+-]?\d*(?:[.,]\d)?$/;
                          if (
                            phone_regex.test(e.target.value) &&
                            e.target.value.length <= 10
                          ) {
                            setPhone(e.target.value);
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
                    </div> */}

                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-item mt-3">
                      <span className="input-group-text">
                        <LocationCityIcon className="icons" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        name="city"
                        value={city}
                        pattern="[A-Za-z /s]{3,18}"
                        title="City name can only be in uppercase or lowercase non-numeric characters or in both and 3 to 18 character long"
                        onChange={(e) => {
                          const name_regex = /^[a-zA-Z /s]*$/;
                          if (
                            name_regex.test(e.target.value) &&
                            e.target.value.length <= 18
                          ) {
                            setCity(e.target.value);
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
                    </div> */}

                    <div className="row signup-btns mt-2">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12 signup-btn-div mt-3">
                        <button
                          type="submit"
                          className="form-control btn btn-lg btn-primary"
                        >
                          Sign Up
                        </button>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-12 signup-cancelbtn-div">
                        <Link to="/login">
                          <button
                            type="submit"
                            className="form-control btn btn-lg mt-3 btn-warning"
                          >
                            Cancel
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
      </div>
    </Fragment>
  );
};

export default Usersignup;
