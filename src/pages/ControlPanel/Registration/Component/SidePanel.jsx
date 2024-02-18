import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import BusinessDetailsIcon from '../../../../assets/images/registration-icon-2.svg'
import SellerCodeIcon from '../../../../assets/images/registration-icon-3.svg'
import BankDetailsIcon from '../../../../assets/images/registration-icon-4.svg'

export default function SidePanel(){

    const tabStyle={
        "background": "rgba(79, 128, 225, 0.15)",
        "color": "#29669A",
        "fill": "#29669A"
    }


    return(
        <div className="col-md-4 text-black p-0 pt-2">
                    <div className="px-2 py-1">
                        <Link to="/Vendor/businessDetails" className='text-black text-decoration-none'>
                                <div className="p-2 pl-4 ml-3 mr-2 d-flex align-items-center rounded"
                                 style={window.location.pathname=='/Vendor/businessDetails'?tabStyle:{}}>
                                    <img className="me-3" src={BusinessDetailsIcon} />
                                    {/* <BusinessDetailsIcon  ></BusinessDetailsIcon> */}
                                    <p>Business Details</p>
                                </div>
                            
                        </Link>
                    </div>
                    <div className="px-2 py-1">
                        <Link to="/Vendor/sellerCodeDetails" className='text-black text-decoration-none'>
                            <div className="p-2 pl-4 ml-3 mr-2 d-flex align-items-center rounded"
                             style={window.location.pathname=='/Vendor/sellerCodeDetails'?tabStyle:{}}>
                                <img className="me-3" src={SellerCodeIcon} />
                                <p>Seller Code Details</p>
                            </div>
                        </Link>
                    </div>
                    <div className="px-2 py-1">
                        <Link to="/Vendor/bankDetails" className='text-black text-decoration-none'>
                            <div className="p-2 pl-4 ml-3 mr-2 d-flex align-items-center rounded"
                             style={window.location.pathname=='/Vendor/bankDetails'?tabStyle:{}}>
                                <img className="me-3" src={BankDetailsIcon} />
                                <p>Bank Details</p>
                            </div>
                        </Link>
                    </div>
                </div>
    )
}