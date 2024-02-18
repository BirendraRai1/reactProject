
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SidePanel from './Component/SidePanel';

import styles from "./resgistration_style.module.css";

import PersonalInfoIcon from '../../../assets/images/registration-icon-1.svg'

function SellerCodeDetails() {

  const handleSave = (e)=>{
    e.preventDefault()
  }

  return (
    <div className='container-fluid px-1 px-md-4'>
            <div className={styles.mainHeading+" text-black pt-4 mx-2"}>
                <h2>Profile Edit</h2>
                <h6 className="mt-3">Manage your account  details</h6>
            </div>
            <div className="row pt-5 mx-3">
                <div className="col-md-4 px-2 py-3">
                    <div className={styles.sideHeading+" p-2 px-4 ml-3 mr-2 d-flex align-items-center rounded"}>
                        <img className="me-3" src={PersonalInfoIcon}/>
                        <p>Personal Information</p>
                    </div>
                </div>
                <div className={styles.subHeading+" col-md-8 text-black pr-0"}>
                    <div className="ml-4 my-2 borderBottom">
                        <h4 className='pt-1'><strong>Seller Code Details</strong></h4>
                        <p className='py-2 font-weight-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>
            </div>
            <div className={styles.infoCard+" row bg-white mx-3 pb-3 rounded"}>
            <SidePanel />
            <div className={styles.rightPanel+" col-md-8 pt-4 text-black"}>
            <Form onSubmit={handleSave} id='form-seller-code' className={styles.formStyle} noValidate >
              <div className="d-flex px-2">
                <div className="col-md-6 px-2 my-2">
                  <label htmlFor="SellerName">Seller Name</label>
                  <input
                    type="text"
                    name="SellerName"
                    placeholder="Sam"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 px-2 my-2">
                  <label htmlFor="SellerCode">Seller Code</label>
                  <input
                    type="text"
                    name="SellerCode"
                    placeholder="xyz@gmail.com"
                    className="form-control"
                  />
                </div>
              </div>
              
              {/* <div className="col-md-6 px-2 mx-2 my-2">
                <label htmlFor="industryType">Select Shipping State</label>
                <Form.Select aria-label="Default select example">
                  <option value="Bihar">Bihar</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Chattisgarh">Chattisgarh</option>
                </Form.Select>
              </div> */}
              </Form>
            </div>
            <div className="d-flex justify-content-end my-3">
                <Button id={styles.btnSaveChange} type='submit' form='form-seller-code' variant='primary' className='mx-2'>Save Changes</Button>
                <Button id={styles.btnCancel} variant='outline-primary' className='mx-2'>Cancel</Button>
            </div>
      </div>
    </div>
  );
}

export default SellerCodeDetails;
