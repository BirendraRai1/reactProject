import styles from '../../ControlPanel/Registration/resgistration_style.module.css'
import { Button, Form, Image } from 'react-bootstrap'

import PersonalInfoIcon from '../../../assets/images/registration-icon-1.svg'
import ProfilePic from '../../../assets/images/profile_pic.png'
import SidePanel from './Component/SidePanel'

export default function PersonalInfo(){

    const stateList = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh','Jharkhand', 'Karnataka', 'Jammu & Kashmir', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal']

    const handleSave = (e)=>{
        e.preventDefault()
        console.log('submitted')
    }

    return(
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
                        <h4 className='pt-1'><strong>General Information</strong></h4>
                        <p className='py-2 font-weight-normal'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div>
            </div>
            <div className={styles.infoCard+" row bg-white mx-3 pb-3 rounded"}>
                <SidePanel  />
                <div className={styles.rightPanel+" col-md-8 text-black"}>
                    <div className="px-1 px-md-4 py-2">
                        <h5><strong>Profile Picture</strong></h5>
                    </div>
                    <div className="d-flex px-1 px-md-4 flex-column flex-md-row">
                        <div className="col-12 col-md-5 d-flex px-0 px-md-1">
                            <div className="mt-1 mr-2"><Image src={ProfilePic} /></div>                        
                            <div className={styles.nameContainer+" font-weight-bold py-1"}>
                                <h6 className='font-weight-bold pb-1'>Mark Collins</h6>
                                <p className='font-weight-normal'>Role/title</p>
                                <p className='font-weight-normal'>Location</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-row align-items-end mt-3 mt-md-0 px-0 px-md-1">
                            <div className={styles.buttonRow+"  ml-0 ml-md-2"}>
                                <Button id={styles.btnChange} variant='primary' className='mx-2'>Change</Button>
                                <Button id={styles.btnDelete} variant='outline-primary' className='mx-2'>Delete</Button>
                                {/* <button className='my-2'>Delete</button> */}
                            </div>
                        </div>
                        
                        
                    </div>
                    <Form onSubmit={handleSave} id='form-personal-info' className={styles.formStyle} noValidate >
                        <div className="px-0 px-md-3 mt-5 ">
                            <div className="row py-0 py-md-2">
                                <div className="col-md-6">
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label htmlFor='username'>Username</Form.Label>
                                        <Form.Control required type='text' name='username' placeholder='Sam' />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label htmlFor='email'>Email</Form.Label>
                                        <Form.Control required type='text' name='email' placeholder='xyz@gmail.com' />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row py-0 py-md-2">
                                <div className="col-md-6">
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label htmlFor='phone'>Phone Number</Form.Label>
                                        <Form.Control required type='text' name='phone' placeholder='9876543210' />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label htmlFor='roll'>Roll/Title</Form.Label>
                                        <Form.Control required type='text' name='roll' placeholder='Manager' />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row py-0 py-md-2">
                                <div className="col-md-6">
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label htmlFor='address'>Address</Form.Label>
                                        <Form.Control required type='text' name='address' placeholder='Address' />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label htmlFor='state'>State</Form.Label>
                                        {/* <Form.Control required type='text' name='state' placeholder='Select' /> */}
                                        <Form.Select name='state'>
                                            <option value="">Select</option>
                                            {
                                                stateList.map((item,i) => {
                                                    return <option key={i} value={item}>{item}</option>
                                                })
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row py-0 py-md-2">
                                <div className="col-md-6">
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label htmlFor='city'>City</Form.Label>
                                        <Form.Control required type='text' name='city' placeholder='Raipur' />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label htmlFor='pincode'>PinCode</Form.Label>
                                        <Form.Control required type='text' name='pincode' placeholder='492001' minLength={6} maxLength={6} />
                                    </Form.Group>
                                </div>
                            </div>
                            
                        </div>
                    </Form>
                </div>
                <div className="d-flex justify-content-end my-3">
                    <Button id={styles.btnSaveChange} type='submit' form='form-personal-info' variant='primary' className='mx-2'>Save Changes</Button>
                    <Button id={styles.btnCancel} variant='outline-primary' className='mx-2'>Cancel</Button>
                </div>
            </div>
        </div>
        
    )
}