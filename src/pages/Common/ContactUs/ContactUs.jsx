import { Button, Carousel } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import { useState } from "react";

import styles from "./contactUs.module.css";

export default function ContactUs(){

    const [fullName,setFullName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [company,setCompany] = useState("")
    const [userType,setUserType] = useState("")
    const [message,setMessage] = useState("")

    const defaultProps = {
        center: [59.938043, 30.337157],
        zoom: 9,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
      };

    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            "fullName": fullName,
            "phone": phone,
            "email": email,
            "company": company,
            "userType": userType,
            "message": message 
        }
        console.log(data)
    }

    return(
        <>
            <div className={styles.about_banner+" p-5"}>
                <h2 className={styles.heading+" text-white"}>Let's Connect</h2>
            </div>
            <div className={styles.background+" p-3 p-md-5 py-5"}>
                <div className="container col col-md-10 mx-auto bg-white my-3 p-3 p-md-5 rounded">
                    <div className="column">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group row align-items-center py-2">
                                <span className={styles.form_text+" col-md-4 text-md-end"}>Full Name <sup>*</sup></span>
                                <div className="col-md-1"></div>
                                <div className="col-md-7">
                                    <input type="text" className={styles.text_field+" form-control col-md-8 mb-0"} name="fullname" required
                                    onChange={(e)=>{setFullName(e.target.value)}} /> 
                                </div>
                            </div>
                            <div className="form-group row align-items-center py-2">
                                <span className={styles.form_text+" col-md-4 text-md-end"}>Phone Number</span>
                                <div className="col-md-1"></div>
                                <div className="col-md-7">
                                    <input type="text" maxLength={10} className={styles.text_field+" form-control col-md-8 mb-0"} name="phone"
                                    onChange={(e)=>{setPhone(e.target.value)}} /> 
                                </div>
                            </div>
                            <div className="form-group row align-items-center py-2">
                                <span className={styles.form_text+" col-md-4 text-md-end"}>Email <sup>*</sup></span>
                                <div className="col-md-1"></div>
                                <div className="col-md-7">
                                    <input type="email" className={styles.text_field+" form-control col-md-8 mb-0 bg-white"} name="email" required
                                    onChange={(e)=>{setEmail(e.target.value)}} /> 
                                </div>
                            </div>
                            <div className="form-group row align-items-center py-2">
                                <span className={styles.form_text+" col-md-4 text-md-end"}>Company Name</span>
                                <div className="col-md-1"></div>
                                <div className="col-md-7">
                                <input type="text" className={styles.text_field+" form-control col-md-8 mb-0"} name="company_name"
                                onChange={(e)=>{setCompany(e.target.value)}} /> 
                                </div>
                            </div>
                            <div className="form-group row align-items-center py-2">
                                <span className={styles.form_text+" col-md-4 text-md-end"}>Select User Type</span>
                                <div className="col-md-1"></div>
                                <div className="col-md-7">
                                <select className="form-select" aria-label="Select user type" name="user_type" defaultValue=""
                                 onChange={(e)=>{setUserType(e.target.value)}} >
                                    <option value="">Select...</option>
                                    <option value="vendor">Vendor</option>
                                    <option value="client">Client</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row align-items-center py-2">
                                <span className={styles.form_text+" col-md-4 text-md-end"}>Message</span>
                                <div className="col-md-1"></div>
                                <div className="col-md-7">
                                    <textarea className={styles.text_field+" form-control col-md-8 mb-0"} name="message" 
                                    onChange={(e)=>{setMessage(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row justify-content-center my-5">
                                <div className=" col-md-4">
                                    <input type="submit" className={styles.btn_submit+" form-control btn"} value="Contact Us" />
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="p-5">
                <div className="p-0 px-md-5 py-md-3">
                    <iframe className={styles.googleMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.183479491263!2d81.68933209193507!3d21.23994615911617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd36c9094f8d%3A0x9b52fe998fc169b4!2sMagneto%20The%20Mall!5e0!3m2!1sen!2sin!4v1705669565703!5m2!1sen!2sin"  width="600" height="450" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                </div>
            </div> */}
                
        </>
    );
}