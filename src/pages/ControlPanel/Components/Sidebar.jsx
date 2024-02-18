import '../../../assets/css/sb-admin-2.min.css';
import '../../../assets/vendor/fontawesome-free/css/all.min.css';
import styles from './sidebar_style.module.css';

import Logo from '../../../assets/images/Horeca Alliance.png'
import Swal from 'sweetalert2';
import { Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authSlice from '../../../redux/slices/authSlice'

import OpenTicket from '../../../assets/images/open_ticket.svg'
import OrderTicket from '../../../assets/images/order_ticket.svg'
import ClosedTicket from '../../../assets/images/closed_ticket.svg'
import AddIcon from '../../../assets/images/add_icon.svg'
import OrdersIcon from '../../../assets/images/orders_icon.svg'
import CustomersIcon from '../../../assets/images/customer_icon.svg'
import SettingsIcon from '../../../assets/images/settings_icon.svg'
import LogoutIcon from '../../../assets/images/logout_icon.svg'


export default function Sidebar() {

    const dispatch = useDispatch()
    const actions = authSlice.actions
    const navigate = useNavigate()
    // const authToken = useSelector((store)=>store.authState.userToken)

    const textStyle = {
        "fontFamily":"Poppins",
        "color":"black",
        "fontWeight":"500"
    };
    const textWhite = {
        "fontFamily":"Poppins",
        "color":"white",
        "fontWeight":"500" 
    };
    const {pathname} = useLocation();

    const handleLogoutClick =()=>{
        Swal.fire({
            title: "Are you sure ?",
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Logout",
            denyButtonText: `cancel`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(actions.userLoading())
                setTimeout(()=>{
                    dispatch(actions.logOut())
                    navigate('/Login')
                },300)
            } 
          });
    }

    return (
            <ul className="navbar-nav sidebar accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a href='/vendor/dashboard' className="sidebar-brand d-flex align-items-center justify-content-center">
                    <Image src={Logo} width="90%" />
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider mb-4" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item" style={textStyle}>
                    <a href='/vendor/dashboard' className={(pathname === '/vendor/dashboard') ? 'text-white' : 'text-dark'}>
                        <div className={(pathname === '/vendor/dashboard') ? 'bg-primary nav-link px-3 py-2 my-1' : " nav-link px-3 py-2 my-1"} href="#">
                            <i className="fas fa-fw fa-tachometer-alt mx-2 "></i>
                            <span style={(pathname === '/vendor/dashboard') ? textWhite : textStyle}>Dashboard</span>
                        </div>
                    </a>
                </li>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li style={textStyle} className="nav-item">
                    <a className={(pathname === '/vendor/product-list' || pathname === '/vendor/add-product') ? 'bg-primary nav-link px-3 py-2 my-1 collapsed text-white' : " nav-link px-3 py-2 my-1 text-dark collapsed"} href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog mx-2"></i>
                        <span style={(pathname === '/vendor/product-list' || pathname === '/vendor/add-product') ? textWhite : textStyle}>Products</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="py-2 collapse-inner rounded">
                            <div className={(pathname === '/vendor/my-brands' || pathname === '/vendor/add-brand' || pathname === '/vendor/edit-brand') ? styles.bgColor+" collapse-item d-flex align-items-center" : "collapse-item d-flex align-items-center"}>
                                <i className="fas fa-star" aria-hidden="true"></i>
                                <Link to='/vendor/my-brands' className="collapse-item">My Brands </Link>
                            </div>
                            <div className={(pathname === '/vendor/product-list' || pathname === '/vendor/add-product') ? styles.bgColor+" collapse-item d-flex align-items-center" : "collapse-item d-flex align-items-center"}>
                                <i className="fas fa-solid fa-plus"></i>
                                <Link to='/vendor/product-list' className="collapse-item">Add Products </Link>
                            </div>
                        </div>
                    </div>
                </li>
                



            {/* <!-- Nav Item - Orders --> */}
            {/* <li className=" nav-item" style={textStyle}>
                <Link to='/Vendor/Orders' className={(pathname === '/Vendor/Orders') ? 'text-white' : 'text-dark'}>
                    <div className={(pathname === '/Vendor/Orders') ? 'bg-primary nav-link px-3 py-2 my-1' : ''+"nav-link px-3 py-2 my-1"} href="#">
                        <Image className='mx-2' src={OrdersIcon} fluid />
                        <span style={(pathname === '/Vendor/Orders') ? textWhite : textStyle}>Orders</span>
                    </div>
                </Link>
            </li> */}


            {/* <!-- Nav Item - Customers --> */}
            {/* <li className=" nav-item" style={textStyle}>
                <Link to='' className="text-dark">
                    <div className="nav-link px-3 py-2 my-1" href="#">
                        <Image className='mx-2' src={CustomersIcon} fluid />
                        <span style={textStyle}>Customer</span>
                    </div>
                </Link>
            </li> */}


            {/* <!-- Nav Item - Settings --> */}
            {/* <li className=" nav-item" style={textStyle}>
                <Link to='' className="text-dark">
                    <div className="nav-link px-3 py-2 my-1" href="#">
                        <Image className='mx-2' src={SettingsIcon} fluid />
                        <span style={textStyle}>Settings</span>
                    </div>
                </Link>
            </li> */}
            

            {/* <!-- Nav Item - Logout --> */}
            <li className=" nav-item" style={textStyle}>
                <Link to='' onClick={handleLogoutClick} className="text-dark">
                    <div className="nav-link px-3 py-2 my-1" href="#">
                        <Image className='mx-2' src={LogoutIcon} fluid />
                        <span style={textStyle}>Logout</span>
                    </div>
                </Link>
            </li>
            




            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline my-3">
                <button className="rounded-circle border-0 h-auto w-auto" id="sidebarToggle"></button>
            </div>

            {/* <!-- Sidebar Message --> */}
            

        </ul>
    );
}