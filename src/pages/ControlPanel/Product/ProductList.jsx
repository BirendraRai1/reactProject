import { Button, ButtonGroup, Dropdown, DropdownButton, Form, Image, InputGroup } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';


import '../../../assets/vendor/fontawesome-free/css/all.min.css';
import styles from './product_style.module.css'

export default function ProductList(){

    // const DataArray = [
    //     {
    //         "orderId":"5917",
    //         "orderNo":"23457654",
    //         "status":"new",
    //         "item":"1",
    //         "customerName":"Rajtilak Patel",
    //         "shippingService":"standard",
    //         "trackingCode":"940010010936113003113",
    //         "":""
    //     },
    //     {
    //         "orderId":"5917",
    //         "orderNo":"23457654",
    //         "status":"in production",
    //         "item":"1",
    //         "customerName":"Rajtilak Patel",
    //         "shippingService":"standard",
    //         "trackingCode":"940010010936113003113",
    //         "":""
    //     },
    //     {
    //         "orderId":"5917",
    //         "orderNo":"23457654",
    //         "status":"shipped",
    //         "item":"1",
    //         "customerName":"Rajtilak Patel",
    //         "shippingService":"standard",
    //         "trackingCode":"940010010936113003113",
    //         "":""
    //     },
    //     {
    //         "orderId":"5917",
    //         "orderNo":"23457654",
    //         "status":"cancelled",
    //         "item":"1",
    //         "customerName":"Rajtilak Patel",
    //         "shippingService":"standard",
    //         "trackingCode":"940010010936113003113",
    //         "":""
    //     },
    //     {
    //         "orderId":"5917",
    //         "orderNo":"23457654",
    //         "status":"rejected",
    //         "item":"1",
    //         "customerName":"Rajtilak Patel",
    //         "shippingService":"standard",
    //         "trackingCode":"940010010936113003113",
    //         "":""
    //     },
    //     {
    //         "orderId":"5917",
    //         "orderNo":"23457654",
    //         "status":"draft",
    //         "item":"1",
    //         "customerName":"Rajtilak Patel",
    //         "shippingService":"standard",
    //         "trackingCode":"940010010936113003113",
    //         "":""
    //     }
    // ]

    const statusBadge = (text,classname)=>{ return <div className={styles.Badge+" "+classname}>{text}</div>}

    // const setStatusBadge = (status)=> {
    //     switch(status){
    //         case 'new':
    //             return statusBadge("New order",styles.new);
    //         case 'in production':
    //             return statusBadge("In prod.",styles.inProd);
    //         case 'shipped':
    //             return statusBadge("Shipped",styles.shipped);
    //         case 'cancelled':
    //             return statusBadge("Cancelled",styles.cancelled);
    //         case 'rejected':
    //             return statusBadge("Rejected",styles.rejected);
    //         default:
    //             return statusBadge("Draft",styles.draft);

    //     }
    // }
    

    return(
        <>
            <div className="row px-2">
                <div className="col-6">
                    <h4>All Products</h4>
                    <h6>Home / All Products</h6>
                </div>
                <div className="col-6">
                    <Link to="/vendor/add-product"><button className={styles.addProductBtn +" btn btn-lg float-end"}><i className="fas fa-solid fa-plus"></i> Add Product</button></Link>
                </div>
            </div>
        </>
    );
}