
import Button from "react-bootstrap/Button";
import styles from "./resgistration_style.module.css";
import SidePanel from "./Component/SidePanel";

import PersonalInfoIcon from '../../../assets/images/registration-icon-1.svg'
import { Form } from "react-bootstrap";



function BankDetails() {

  const handleSave = (e)=>{
    e.preventDefault()
    console.log("pressed")
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
                        <h4 className='pt-1'><strong>Bank Details</strong></h4>
                        <p className='py-2 font-weight-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>
            </div>
            <div className={styles.infoCard+" row bg-white mx-3 pb-3 rounded"}>

            <SidePanel />
            <div className={styles.rightPanel+" col-md-8"}>
            <Form onSubmit={handleSave} id='form-bank-info' className={styles.formStyle} noValidate >
              <div className="row my-3 px-1 px-md-2 text-black">
                <div className="col-md-6 my-2">
                  <Form.Group className={styles.formGroup}>
                    <label htmlFor="BeneficiaryName">Beneficiary Name</label>
                    <input
                      type="text"
                      name="BeneficiaryName"
                      placeholder="Sam"
                      className="form-control"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 my-2">
                  <Form.Group className={styles.formGroup}>
                    <label htmlFor="AccountNumber">Current A/C No</label>
                    <input
                      type="text"
                      name="AccountNumber"
                      placeholder="AccountNumber"
                      className="form-control"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 my-2">
                  <Form.Group className={styles.formGroup}>
                    <label htmlFor="yat/tin">IFSC code</label>
                    <input
                      type="text"
                      name="yat/tin"
                      placeholder="IFSC code"
                      className="form-control"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 my-2">
                  <Form.Group className={styles.formGroup}>
                    <label htmlFor="tan">Bank Name</label>
                    <input
                      type="text"
                      name="BankName"
                      placeholder="BankName"
                      className="form-control"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 my-2">
                  <Form.Group className={styles.formGroup}>
                    <label htmlFor="mou">Branch Name</label>
                    <input
                      type="text"
                      name="Branch_Name"
                      placeholder="BranchName"
                      className="form-control"
                    />
                  </Form.Group>
                </div>
              </div>
              </Form>
              </div>
              <div className="d-flex justify-content-end my-3">
                  <Button id={styles.btnSaveChange} type='submit' form='form-bank-info' variant='primary' className='mx-2'>Save Changes</Button>
                  <Button id={styles.btnCancel} variant='outline-primary' className='mx-2'>Cancel</Button>
              </div>
        </div>
    </div>
  );
}

export default BankDetails;
