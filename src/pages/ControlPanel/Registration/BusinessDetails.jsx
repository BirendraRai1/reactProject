
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SidePanel from "./Component/SidePanel";

import styles from "./resgistration_style.module.css";

import PersonalInfoIcon from '../../../assets/images/registration-icon-1.svg'


export default function BusinessDetails() {

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
                        <h4 className='pt-1'><strong>Business Information</strong></h4>
                        <p className='py-2 font-weight-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>
            </div>
            <div className={styles.infoCard+" row bg-white mx-3 pb-3 rounded"}>
                <SidePanel page={'business_info'} />
                <div className={styles.rightPanel+" col-md-8"}>
                <Form onSubmit={handleSave} id='form-business-info' className={styles.formStyle} noValidate >

                  <div className="row my-3 px-2 text-black">
                    <div className="col-md-6 my-2">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="gstn">GSTN</label>
                        <input
                          type="text"
                          name="gstn"
                          placeholder="GSTIN"
                          className="form-control"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 my-2">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="pan">Company PAN</label>
                        <input
                          type="text"
                          name="pan"
                          placeholder="PAN"
                          className="form-control"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 my-2">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="yat/tin">YAT / TIN</label>
                        <input
                          type="text"
                          name="yat/tin"
                          placeholder="123-098-345-09"
                          className="form-control"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 my-2">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="tan">TAN</label>
                        <input
                          type="text"
                          name="tan"
                          placeholder="1238"
                          className="form-control"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 my-2">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="mou">MOU</label>
                        <input
                          type="text"
                          name="mou"
                          placeholder="xyz  "
                          className="form-control"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 my-2">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="industryType">Industry Type</label>
                        <Form.Select aria-label="Default select example">
                          <option value="abs">abs</option>
                          <option value="def">def</option>
                          <option value="ghi">ghi </option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="col-md-6 my-2">
                      <Form.Group className={styles.formGroup}>
                        <label htmlFor="pan">Manage Licence</label>
                        <input
                          type="text"
                          name="manage_licence"
                          placeholder="dfg"
                          className="form-control"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  </Form>

                </div>
                <div className="d-flex justify-content-end my-3">
                    <Button id={styles.btnSaveChange} type='submit' form='form-business-info' variant='primary' className='mx-2'>Save Changes</Button>
                    <Button id={styles.btnCancel} variant='outline-primary' className='mx-2'>Cancel</Button>
                </div>
          </div>
      </div>
  );
}
