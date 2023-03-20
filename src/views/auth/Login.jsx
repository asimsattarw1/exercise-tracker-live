import React, { Fragment, useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import "../../css/auth.css";
import validator from "validator";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { userDataAction, nullUserData } from "../../redux/store/exerciseReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [alertDisplay, setAlertDisplay] = useState(false);

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
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, password: pwd })
        };

        fetch('http://localhost:7000/user/login', requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data?.status) {
              setCookie(
                "jwt",
                `${data?.token}`,
                { path: "/" }
              );
              setCookie("date", new Date().toLocaleDateString(), { path: "/" });
              navigate('/');
              setEmail("");
              setPwd("");
              dispatch(userDataAction(data));
              console.log("being dispatched:", data);
            }
          });
      } catch (error) {
        window.scrollTo(0, 0);
        setAlertDisplay(true);
        setErrorMsg(error);
      }
    }
  };


  // useEffect(() => {
  //   if (dateNow !== cookies?.date) {
  //     removeCookie("user", { path: "/" });
  //     dispatch(nullUserData());
  //   }
  // }, [dateNow]);


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
            <div className="login-content">
              <div className="jubotron login-header mt-3">
                <h2>Welcome Back</h2>
                <p>Enter your credentials to access your account</p>
              </div>

              <div className="row login-content-row">
                <form
                  onSubmit={loginData}
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
                      value={pwd}
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

export default Login;
