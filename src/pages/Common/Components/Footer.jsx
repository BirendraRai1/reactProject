import { Image } from "react-bootstrap";

import  styles from "./layouts.module.css";

import  footerLogo from '../../../assets/images/footer-logo.png';
import  footerMap from '../../../assets/images/footer-map.svg';
import  footerCall from '../../../assets/images/footer-phone.svg';
import  footerMail from '../../../assets/images/footer-mail.svg';
import  footerTime from '../../../assets/images/footer-clock.svg';
import  appStore from '../../../assets/images/app_store.png';
import  appStoreIcon from '../../../assets/images/app_store_icon.png';
import playStoreIcon from '../../../assets/images/play_store_icon.png'
import  playStore from '../../../assets/images/play_store.png';
import  footerFb from '../../../assets/images/footer-fb.svg';
import  footerIn from '../../../assets/images/footer-in.svg';
import  footerInsta from '../../../assets/images/footer-insta.svg';
import  footerTwitter from '../../../assets/images/footer-twitter.svg';

export default function Footer() {
    return(
        <>
            <div className={styles.footer_details+ " row px-3 px-md-5  my-4"}>
                <div className="col-md-6 justify-content-center">
                    <div><Image src={footerLogo} fluid className="mb-2"/></div>
                    {/* <div className={styles.footer_address+" my-3"}><Image src={footerMap} fluid/> Address: </div> */}
                    <div className={styles.footer_address+" my-3"}><Image src={footerCall} fluid/> Call Us: 12345-12345</div>
                    <div className={styles.footer_address+" my-3"}><Image src={footerMail} fluid/> Email: groceyish@contact.com</div>
                    <div className={styles.footer_address+" my-3"}><Image src={footerTime} fluid/> Work hours: 10:00 AM - 20:00 PM, Monday - Saturday</div>
                </div>
                <div className="col-md-3 my-4">
                    <div><h3 className={styles.heading+" mb-2 mb-md-4 mt-2"}>Company</h3></div>
                    <div className={styles.footer_address+" my-2"}>About Us</div>                    
                    <div className={styles.footer_address+" my-2"}>Careers</div>
                    <div className={styles.footer_address+" my-2"}>Blogs</div>
                    <div className={styles.footer_address+" my-2"}>Leads</div>
                    <div className={styles.footer_address+" my-2"}>Values</div>
                </div>
                <div className="col-md-3 my-4 d-flex flex-row justify-content-md-end">
                    <div className="">
                        <div><h3 className={styles.heading+" mb-2 mb-md-4 mt-2"}>Help Center</h3></div>
                        <div className={styles.footer_address+" my-2"}>Payments</div>                    
                        <div className={styles.footer_address+" my-2"}>Refund</div>
                        <div className={styles.footer_address+" my-2"}>Checkout</div>
                        <div className={styles.footer_address+" my-2"}>Q&A</div>
                        <div className={styles.footer_address+" my-2"}>Privacy Policy</div>
                    </div>
                    
                </div>
            </div>
            <div className={styles.footer_app+" text-center mt-4"}>Available on both IOS & Android</div>
            <hr className={styles.footer_hr+" mb-2"} />

            <div className="row mb-5 mt-4 mt-md-0">
                <div className="col-md-3 d-flex align-items-center justify-content-center">© 2024, All rights reserved</div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-center"><Image src={appStore} fluid/></div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center"><Image src={playStore} fluid/></div>
                    </div>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center my-3 my-md-0">
                    <div className="row">
                        <div className={styles.footer_social_icon+" col mx-2 p-2"}><Image src={footerFb} fluid/></div>
                        <div className={styles.footer_social_icon+" col mx-2 p-2"}><Image src={footerIn} fluid/></div>
                        <div className={styles.footer_social_icon+" col mx-2 p-2"}><Image src={footerInsta} fluid/></div>
                        <div className={styles.footer_social_icon+" col mx-2 p-2"}><Image src={footerTwitter} fluid/></div>
                    </div>
                </div>
            </div>
        </>
    );
}