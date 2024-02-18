import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from "./reset_password.module.css";

import eye_closed from '../../../../assets/images/eye_closed.svg';
import eye_open from '../../../../assets/images/eye_open.svg';

function ResetPassword(){

    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState('false');    
    const [confirmPassword,setConfirmPassword] = useState("");
    const [showConfirmPassword,setShowConfirmPassword] = useState('false');
    // const [showConfirmPW,setShowConfirmPW] = useState('false');

   const handleSubmit = (event) => {
        event.preventDefault();
        // perform all neccassary validations
        if (password !== confirmPassword) {
            toast.error(" Oops! Password did not match!");       
        } else {
            // make API call
        }
    }

    

    return(
        <>
            <div className={styles.container_fluid + " container-fluid py-5"} >
                <div className={styles.inner_container + " col-md-5 mx-auto bg-white rounded"}>
                    <div className={styles.content + " py-2"}>
                        <strong className={styles.text_lo}>LO<span className={styles.text_go}>GO</span></strong>
                    </div>
                    <div className={styles.content + " py-1"}>
                        <span className={styles.text}>New Password</span>
                    </div>
                    <div className={styles.content + " py-1"}>
                        <span className={styles.text_normal}>Set the new password for your account so you can login and access all featuress.</span>
                    </div>
                    <div className={styles.content + " py-2"}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className={styles.text_label}>Enter new password <span className="text-danger">*</span></label>
                                <div className="wrapper d-flex flex-row-reverse align-items-center">
                                    <input className="form-control" placeholder="Password@123" type={showPassword?"password":"text"} name="password" id="password" data-testid="password" 
                                    onChange={(e) => setPassword(e.target.value)} required />
                                    <img className="position-absolute p-2 pb-3" 
                                        src={showPassword?eye_closed:eye_open} 
                                        onClick={()=>showPassword?setShowPassword(false):setShowPassword(true)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className={styles.text_label}>Confirm Password <span className="text-danger">*</span></label>
                                <div className="wrapper d-flex flex-row-reverse align-items-center">
                                    <input className="form-control" placeholder="Password@123" type={showConfirmPassword?"password":"text"} name="cPassword" id="cPassword"
                                    onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    <img className="position-absolute p-2 pb-3" 
                                            src={showConfirmPassword?eye_closed:eye_open} 
                                          onClick={()=>showConfirmPassword?setShowConfirmPassword(false):setShowConfirmPassword(true)} />
                                </div> 
                            </div>
                            <div className="form-group">
                                <input type="submit" className="form-control my-2" value="UPDATE PASSWORD"  />
                            </div>
                            
                        </form>
                        
                        
                    </div>
                    {/* <div className="content mx-1 py-1">
                        <input className="" type="password" name="password" id="password" />
                    </div> */}
                </div>
            </div>

            <ToastContainer />
            
        </>
    )
}

export default ResetPassword;