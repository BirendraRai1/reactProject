import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

import styles from './home.module.css';

import homeSlider1 from '../../../assets/images/home_slider1.png';
import checkedImg from '../../../assets/images/checked.png';
import weWork from '../../../assets/images/we_work.png';
import step1 from '../../../assets/images/step1.svg';
import step2 from '../../../assets/images/step2.svg';
import step3 from '../../../assets/images/step3.svg';
import step4 from '../../../assets/images/step4.svg';
import testLogo from '../../../assets/images/test_logo.svg';
import star from '../../../assets/images/star.svg';
import doubleQuote from '../../../assets/images/double-quotes.svg';
import testPerson from '../../../assets/images/test1.png';
import deals from '../../../assets/images/deals.svg';
import bus from '../../../assets/images/bus.svg';
import refundable from '../../../assets/images/refundable.svg';

export default function Home() {
    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={homeSlider1} alt="homeSlider1" className='d-block w-100' />
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img src={homeSlider1} alt="homeSlider1" className='d-block w-100' />
                </Carousel.Item> */}
            </Carousel>
            <div className="text-center">
                <h3 className={styles.header_3+" mb-2 display-6"}>Why should you partner with Horeca Alliance ?</h3>
                <p className={styles.para_1 + " "}>Partnering with Horeca Alliance presents a multitude of benefits for your business, ranging from increased exposure</p>
                <p className={styles.para_1 + " "}>and market reach to streamlined operations and enhanced credibility. Here are several compelling reasons why your</p>
                <p className={styles.para_1 + " "}> business should consider forming a partnership with Horeca Alliance:</p>

                <div className="row py-5 d-flex align-items-center justify-content-center">
                    <div className=" col-md-3 my-2 mx-4">
                        <div className={styles.home_card +" p-5"}>
                            <h5>What you need</h5>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Pan Card Copy</p>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Gst Number</p>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Account Details</p>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Email</p>
                        </div>
                    </div>
                    <div className=" col-md-3 my-2 mx-4">
                        <div className={styles.home_card +" p-5"}>
                            <h5>Benefits you get from us</h5>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Pan Card Copy</p>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Gst Number</p>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Account Details</p>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Email</p>
                        </div>
                    </div>
                    <div className=" col-md-3 my-2 mx-4">
                        <div className={styles.home_card +" p-5"}>
                            <h5>How We Support You</h5>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Pan Card Copy</p>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Gst Number</p>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Account Details</p>
                            <p className={styles.card_para+" my-2"}><Image className="me-3" src={checkedImg} fluid/> Email</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className={styles.header_3+" mb-2"}>How We Works ?</h3>
                    <div style={{background: `url(${weWork})` }}>
                        <div className={styles.work_header+" my-2"}>
                            <h3 className="text-white">Partner with Horeca Alliance </h3>
                            <h3 className="text-white">at 0% commission for the 1st month!</h3>
                        </div>
                    </div>
                    <div className={styles.register_process}>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-md-2 mx-3 my-2">
                                <div className={styles.register_card+" py-4"}>
                                    <Image className="mb-4" src={step1} fluid/>
                                    <h5 className={styles.register_card_header5}>Step 1</h5>
                                    <h6 className="px-1">Fill the Registration Form</h6>
                                    <p className="mt-4 px-1">Empower Your Experience: Start Your Journey by Completing the Registration Form! </p>
                                </div>
                            </div>
                            <div className="col-md-2 mx-3 my-2">
                                <div className={styles.register_card+" py-4"}>
                                    <Image className="mb-4" src={step2} fluid/>
                                    <h5 className={styles.register_card_header5}>Step 2</h5>
                                    <h6 className="px-1">Account Verification & Approval Process</h6>
                                    <p className="mt-4 px-1">Unlock Your Opportunities: Complete Account Verification, Embrace Approval, and Start Selling Today!</p>
                                </div>
                            </div>
                            <div className="col-md-2 mx-3 my-2">
                                <div className={styles.register_card+" py-4"}>
                                    <Image className="mb-4" src={step3} fluid/>
                                    <h5 className={styles.register_card_header5}>Step 3</h5>
                                    <h6 className="px-1">Product Listing on our site</h6>
                                    <p className="mt-4 px-1">Showcase Your Best: Elevate Your Business with Seamless Product Listing on Our Platform!</p>
                                </div>
                            </div>
                            <div className="col-md-2 mx-3 my-2">
                                <div className={styles.register_card+" py-4"}>
                                    <Image className="mb-4" src={step4} fluid/>
                                    <h5 className={styles.register_card_header5}>Step 4</h5>
                                    <h6 className="px-1">Order & Delivery Management</h6>
                                    <p className="mt-4 px-1">Effortless Order, Seamless Delivery: Streamline Your Business with Our Intuitive Management System!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.testimonial+" mt-4"}>
                    <div><Image src={testLogo}/></div>
                    <div className="row d-flex justify-content-center">
                        <div className={styles.testimonial_section1+" col-md-5"}>
                            <div>
                                <Image src={doubleQuote} fluid/>
                            </div>
                            <div>                                
                                <Image src={star} fluid/>
                                <Image src={star} fluid/>
                                <Image src={star} fluid/>
                                <Image src={star} fluid/>
                                <Image src={star} fluid/>
                            </div>
                            <div className="text-white my-4">
                                <h5>Lorem ipsum dolor sit amet </h5>
                                <h5>consectetur. Consequat </h5>
                                <h5>auctor consectetur nunc </h5>
                                <h5>vitae dolor blandit. Elit enim </h5>
                                <h5>massa etiam neque laoreet </h5>
                                <h5>lorem sed. </h5>
                                <h6 className="mt-4">Anthony Bahringer</h6>
                                <p className={styles.testimonial_para}>Senior Research Manager</p>
                            </div>
                        </div>
                        <div className="col-md-3 bg-white" style={{backgroundImage: `url(${testPerson})`,backgroundRepeat:`no-repeat`}}>
                        </div>
                    </div>
                    <div className="row m-5 d-flex align-items-center justify-content-center">
                        <div className="col-md-3 m-3">
                            <div className="row">
                                <div className="col-4"><Image src={deals} fluid/></div>
                                <div className={styles.testimonial_section2+" col-8"}>
                                    <h6>Best Prices & Deals</h6>
                                    <p>Don’t miss our daily amazing deals and prices</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-3">
                        <div className="row">
                                <div className="col-4"><Image src={refundable} fluid/></div>
                                <div className={styles.testimonial_section2+" col-8"}>
                                    <h6>Refundable</h6>
                                    <p>If your items have damage we agree to refund it</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-3">
                        <div className="row">
                                <div className="col-4"><Image src={bus} fluid/></div>
                                <div className={styles.testimonial_section2+" col-8"}>
                                    <h6>Smooth Selling</h6>
                                    <p>Do purchase over $50 and get free delivery anywhere</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.home_shop_faster+" p-5"}>
                <h1 className="p-5">Shop Faster With </h1>
                <h1 className="px-5">Horeca Alliance App</h1>
            </div>
        </>
    );
}