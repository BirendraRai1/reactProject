import { Nav, Navbar,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from "react-redux";
import authSlice from '../../../redux/slices/authSlice'
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./layouts.module.css";

import horecaLogo from '../../../assets/images/Horeca Alliance.png';
import TopbarCall from '../../../assets/images/Call.svg';
import { useEffect } from "react";

export default function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const actions = authSlice.actions
    const authToken = useSelector((store)=>store.authState.userToken)

    useEffect(()=>{
        getUserToken()
    })

    const getUserToken = ()=>{
        let userToken = window.localStorage.getItem('user')
        if(userToken && userToken.length){
            dispatch(actions.userData(userToken))
        }
    }

    const handleLogout = ()=>{
        dispatch(actions.userLoading())
        setTimeout(()=>{
            dispatch(actions.logOut())
            navigate('/Login')
        },300)
    }

    return(
        <div>
            <div className={styles.topbar + " topbar d-flex flex-md-row justify-content-between justify-content-sm-between px-3"}>
                <div className="col-md-2 d-none d-sm-block"></div>
                <div className="col-sm-8 col-9 d-flex flex-column flex-sm-row flex-md-row align-items-start align-items-sm-center justify-content-center text-white  px-sm-0">
                    <span className={styles.topbar_header+" pe-3 fs-6"}><Image className="col-2" src={TopbarCall} fluid /> 1231-231231</span>
                    <span className="fs-6"> 24/7 support center</span>
                </div>
                <div className="col-md-2 col-2 d-flex flex-row justify-content-end px-sm-3 px-md-5">
                    <button className={styles.topbar_btn+" btn btn-sm my-2 my-sm-0"}>
                        {authToken?<Link onClick={handleLogout}>Logout</Link> :<Link className="px-md-4 py-2" to='/login'>Login</Link>}
                    </button>
                </div>
            </div>
            <div>
                <Navbar expand="lg" className="bg-body-tertiary px-2 px-md-5">
                    <Navbar.Brand href="/" className=""><Image src={horecaLogo} fluid /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className={styles.nav_text+" ml-auto justify-content-end"}>
                        <Nav >
                        <Nav className={styles.nav_text+" mx-md-3"}><Link to='/'>Home</Link></Nav>
                        <Nav className={styles.nav_text+" mx-md-3"}><Link to='/about'>About</Link></Nav>   
                        {/* <Nav className={styles.nav_text+" mx-md-3"}><Link to='/'>Solution</Link></Nav>    */}
                        {/* <Nav className={styles.nav_text+" mx-md-3"}><Link to='/'>Partner</Link></Nav>    */}
                        {/* <Nav className={styles.nav_text+" mx-md-3"}><Link to='/'>Case-Study</Link></Nav> */}
                        <Nav className={styles.nav_text+" mx-md-3"}><Link to='/contact-us'>Contact Us</Link></Nav>
                        {/* <Nav className="nav-contact text-white d-flex align-items-center justify-content-center"><Link to='/contact'>Get In Touch <span><Image src={phoneIcon} fluid /></span></Link></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}