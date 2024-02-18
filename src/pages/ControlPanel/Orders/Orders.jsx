import { Button, ButtonGroup, Dropdown, DropdownButton, Form, Image, InputGroup } from "react-bootstrap";

import styles from './order_style.module.css'

import addIcon from '../../../assets/images/add_white_icon.svg'
import seachIcon from '../../../assets/images/search_icon.svg'

export default function Orders(){

    const DataArray = [
        {
            "orderId":"5917",
            "orderNo":"23457654",
            "status":"new",
            "item":"1",
            "customerName":"Rajtilak Patel",
            "shippingService":"standard",
            "trackingCode":"940010010936113003113",
            "":""
        },
        {
            "orderId":"5917",
            "orderNo":"23457654",
            "status":"in production",
            "item":"1",
            "customerName":"Rajtilak Patel",
            "shippingService":"standard",
            "trackingCode":"940010010936113003113",
            "":""
        },
        {
            "orderId":"5917",
            "orderNo":"23457654",
            "status":"shipped",
            "item":"1",
            "customerName":"Rajtilak Patel",
            "shippingService":"standard",
            "trackingCode":"940010010936113003113",
            "":""
        },
        {
            "orderId":"5917",
            "orderNo":"23457654",
            "status":"cancelled",
            "item":"1",
            "customerName":"Rajtilak Patel",
            "shippingService":"standard",
            "trackingCode":"940010010936113003113",
            "":""
        },
        {
            "orderId":"5917",
            "orderNo":"23457654",
            "status":"rejected",
            "item":"1",
            "customerName":"Rajtilak Patel",
            "shippingService":"standard",
            "trackingCode":"940010010936113003113",
            "":""
        },
        {
            "orderId":"5917",
            "orderNo":"23457654",
            "status":"draft",
            "item":"1",
            "customerName":"Rajtilak Patel",
            "shippingService":"standard",
            "trackingCode":"940010010936113003113",
            "":""
        }
    ]

    const statusBadge = (text,classname)=>{ return <div className={styles.Badge+" "+classname}>{text}</div>}

    const setStatusBadge = (status)=> {
        switch(status){
            case 'new':
                return statusBadge("New order",styles.new);
            case 'in production':
                return statusBadge("In prod.",styles.inProd);
            case 'shipped':
                return statusBadge("Shipped",styles.shipped);
            case 'cancelled':
                return statusBadge("Cancelled",styles.cancelled);
            case 'rejected':
                return statusBadge("Rejected",styles.rejected);
            default:
                return statusBadge("Draft",styles.draft);

        }
    }
    

    return(
        <div className="container px-2 px-md-4">
            <div className="d-flex pt-2 pb-4 justify-content-between border-bottom">
                <h4 className="font-weight-bold text-black">Order Overview</h4>
                <Button className={styles.addButton+" d-flex align-items-center"}>
                    <Image src={addIcon} className="mx-1" fluid />
                    Add Order
                </Button>
            </div>
            <div className="d-flex mt-3 flex-column flex-md-row">
                <InputGroup size="sm" className="col-md-6 px-2 px-md-0">
                    <Form.Select className="col-6 col-md-5 my-1 my-md-0" aria-label="Default select">
                        <option value="1">Order Id</option>
                        <option value="2">Order Number</option>
                    </Form.Select>
                    <div className={styles.wrapper+" col-6 col-md-7 my-1 my-md-0 px-0"}>
                        <Form.Control className="rounded-start-0 border-left-1 border-md-left-0" type="text" name="search" placeholder="Search"/>
                        <Image className="position-absolute" src={seachIcon} fluid/>
                    </div>
                    
                </InputGroup>
                <div className="col-md-4 d-flex flex-row my-1 my-md-0 px-2">
                    <Form.Select className=" col-6" size="sm" aria-label="Default select">
                        <option value="1">Status</option>
                    </Form.Select>
                    <Form.Select className="ml-0 ml-md-2 col-6" size="sm" aria-label="Default select">
                        <option value="1">Date</option>
                    </Form.Select>
                </div>
                
                    {/* <Form.Select className="my-1" aria-label="Default select example">
                        <option value="1">Order Id</option>
                        <option value="2">Order Number</option>
                    </Form.Select>
                    <div className="wrapper my-1">
                        <Form.Control type='text' name='search' placeholder='Search' />
                        <Image className="position-absolute" src={seachIcon} fluid/>
                    </div> */}
            </div>
            <div className="table-responsive card my-4">
            <table className={styles.tableStyle+" table rounded"} id="dataTable" >
                <thead style={{backgroundColor:"#F9FAFB"}}>
                    <tr>
                        <th>ORDERID</th>
                        <th>ORDER NUMBER</th>
                        <th>STATUS</th>
                        <th>ITEM</th>
                        <th>CUSTOMER NAME</th>
                        <th>SHIPPING SERVICE</th>
                        <th>TRACKING CODE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>ORDERID</th>
                        <th>ORDER NUMBER</th>
                        <th>STATUS</th>
                        <th>ITEM</th>
                        <th>CUSTOMER NAME</th>
                        <th>SHIPPING SERVICE</th>
                        <th>TRACKING CODE</th>
                        <th>ACTION</th>
                    </tr>
                </tfoot>
                <tbody className={styles.tableBody}>
                { DataArray.map((data,i)=>{
                    return <tr key={i}>
                        <th>{data.orderId}</th>
                        <th>{data.orderNo}</th> 
                        <th className={styles.status}>{setStatusBadge(data.status)}</th>
                        <th>{data.item}</th>
                        <th>{data.customerName}</th>
                        <th>{data.shippingService}</th>
                        <th>{data.trackingCode}</th>
                        <th><i className="fa-regular fa-pen-to-square"></i></th>
                    </tr>
                   }) 
                }
                </tbody>
            </table>
        </div>
    </div>
    );
}