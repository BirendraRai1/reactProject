import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useSelector, useDispatch } from "react-redux";
import authSlice from "../../../../redux/slices/authSlice";
import urlConfig from "../../../../../urlConfig";
const actions = authSlice.actions;


import styles from "./login.module.css";

import loader1 from "../../../../assets/pulse-png.png"
import eye_closed from "../../../../assets/images/eye_closed.svg";
import eye_open from "../../../../assets/images/eye_open.svg";
import refresh_icon from "../../../../assets/images/refresh_icon.svg";


function Login() {
  const authToken = useSelector((store) => store.authState.userToken);
  //console.log("authToken is ", authToken);
  /*****data for you backend***/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [security, setSecurity] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  // const { setAuth } = useAuth();
  const dispatch = useDispatch();
  const userLoading = useSelector((store)=>store.authState.userLoading)
  const userToken = useSelector((store)=>store.authState.userToken)

  useEffect(() => {
    console.log(userToken)
    if(userLoading==false && userToken==""){
      console.log("loading")
      loadCaptchaEnginge(4);
    }
  },[userToken]);


  const handleSubmit = async () => {
    
    /***
     * 1. you have to take all the state variable that represents your user
     * 2. Make a post request to your API+ tell you backend that you want to accept the cookies
     * 3. if login:-
     *        In case of success :-reroute it to home & clear all the state variables
     *        In case of failure :-show the error for few seconds
     * ***/
    if (email == undefined || email.length == 0) {
      setErrMsg("Email can't be null");
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
      
    } else if (password == undefined || email.length == 0) {
      setErrMsg("Password can't be null");
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
      
    }else{
      try {
        setLoading(true);
        const valid = validateCaptcha(security,true);

        if (valid) {
          let userDetails = {
            password,
            email,
          };
          //to send cookies with axios read this article
          //https://stackoverflow.com/questions/43002444/make-axios-send-cookies-in-its-requests-automatically

          //console.log("urlConfig.LOGIN_URL", urlConfig.LOGIN_URL);
          try {
            // console.log
            dispatch(actions.userLoading());
            const resp = await axios.post(urlConfig.LOGIN_URL, userDetails, {
              withCredentials: true,
            });

            const userToken = resp.data.token;
            dispatch(actions.userData(userToken));

            navigate('/vendor/dashboard');
            window.location.reload();


          } catch (err) {
            console.log(err)
            dispatch(actions.userError());
            setErrMsg(err.response.data.message)
            setTimeout(() => {
              setErrMsg("");
            }, 2000);
          }

          setEmail("");
          setPassword("");
          setSecurity("");
          setLoading(false);
          setTimeout(() => {
            validateCaptcha('',true)
          }, 300);
          // navigate("/");

        } else {
          setLoading(false);
          setErrMsg("Wrong Captcha");
          setTimeout(() => {
            setErrMsg("");
          }, 2000);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setErrMsg("Error while doing signup");
        setTimeout(() => {
          validateCaptcha('',true)
        }, 300);
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      }
    }
  };

  /**
   * email, password -> verified
   * protected Routes : profile , orders , -> need your verification -> JWT
   *
   * **/
  if (loading || userLoading ) return <div className={styles.loader_screen} ><Image src={loader1} alt="Loading..." /></div>;
  if(userToken) return <h1>Already Logged in</h1>
  return (
    <div
      className={
        styles.signinscreen + " align-items-center justify-content-center"
      } 
    >
      <div className={styles.container + " py-5 px-3"}>
        <div className={styles.innerContainer+" p-4 p-md-5"}>
          <div className={styles.content}>
            <p
              style={{
                textAlign: "left",
                fontSize: "35px",
                color: "#D41D24",
                margin: "0px",
              }}
            >
              LO
              <span
                style={{
                  fontSize: "35px",
                  fontWeight: "600",
                  color: "#153060",
                }}
              >
                GO
              </span>
            </p>
          </div>
          <div className={styles.content}>
            <p
              style={{
                color: "#153060",
                fontSize: "33px",
              }}
            >
              Welcome Back{" "}
            </p>
          </div>
            <form onSubmit={handleSubmit} id="login-form">
              <div className={styles.content}>
                <label htmlFor="email">User Name</label>
                <input
                  className="form-control mb-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>

                <div className={styles.wrapper}>
                  <input
                    className="form-control mb-2"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password123@"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <img
                    className={styles.pw_icon}
                    style={{
                      height: showPassword ? "12px" : "15px",
                      top: showPassword ? "14px" : "13px",
                    }}
                    src={showPassword ? eye_open : eye_closed}
                    onClick={() =>
                      showPassword ? setShowPassword(false) : setShowPassword(true)
                    }
                  />
                </div>

                {/* <Link to="/signup" className="link">
                  <span>Create a new account ?</span>
                </Link> */}
                <div className={styles.forRow+" row pt-2 pb-1"}>
                  <label className="p-0" htmlFor="security">
                    Security Text
                  </label>
                  <div className="col-md-7 p-0">
                    <input
                      style={{ width: `100%` }}
                      className={styles.security_text + " form-control"}
                      type="text"
                      id="security"
                      name="security"
                      placeholder="Enter the shown text"
                      value={security}
                      onChange={(e) => setSecurity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-6 col-md-5 p-0 ">
                    <div
                      className={styles.captcha_box + " justify-content-between mt-2 mt-md-0 ms-0 ms-md-2"}
                    >
                      <LoadCanvasTemplateNoReload style={{ width: `100px` }} />
                      <div
                        onClick={() => {
                          validateCaptcha("", true);
                        }}
                      >
                        <img src={refresh_icon} style={{ padding: "10px" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-2 mb-3" style={{ display: "flex" }}>
                  <input
                    onClick={()=>{setRemember(remember?false:true)}}
                    type="checkbox"
                    defaultChecked={remember ? "true" : "false"}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#153060",
                      paddingLeft: "10px",
                    }}
                  >
                    Remember me on this computer
                  </span>
                </div>
                    <div>
                    <button type="submit" className={styles.submit+" btn"}>Log In</button>
                    </div>
                
                <div className={errMsg ? "errContainer" : ""}>{errMsg}</div>
              </div>
            </form>
          <div className={styles.content + " " + styles.forgot}>
            <span style={{ color: "#F2451C", fontSize: "11px" }}>
              Forgot Password?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
