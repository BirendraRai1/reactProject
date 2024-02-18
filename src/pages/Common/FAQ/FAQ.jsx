import {Image} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import styles from './faq.module.css'

import bannerGirl from '../../../assets/images/faq-banner-girl2.png'
import arrowUpIcon from '../../../assets/images/arrow-up.png';
import arrowDownIcon from '../../../assets/images/arrow-down.png';
import client1 from '../../../assets/images/client_1.svg';
import client2 from '../../../assets/images/client_2.svg'
import arrowLeft from '../../../assets/images/arrow-left.svg'
import arrowRight from '../../../assets/images/arrow-right.svg'
import deliveryIcon from '../../../assets/images/delivery_icon.svg'




function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'+eventKey),
    //   document.querySelectorAll('[eventKey="'+eventKey+'"]').classList.add('show')
    );
  
    return (
      <div
        className={styles.faq_button}
        // type="button"
        style={{ backgroundColor: 'green',width:'100%',textAlign:'left' }}
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  }


export default function FAQ() {
    const[eventKey,setEventKey] = useState('')
    const[showDiv,setShowDiv] = useState(true)
    const[accKey,setAccKey] = useState(null)

    const faqList = [
        {
            "que": "Is there a free trail available?",
            "ans": "It is a long established fact that a reader will be distracted by the readable content of a page."
        },
        {
            "que": "Can I change emy plan later?",
            "ans": "It is a long established fact that a reader will be distracted by the readable content of a page."
        }]

    
    const handleAcc = (key)=>{
        console.log(key)
        if(key==accKey){
            setAccKey(null)
        }else{
            setAccKey(key)
        }
        
    }

    return(
        <>
            <div className="container-fluid p-0">
                <div className={styles.faq_banner+" d-flex align-items-center"}>
                    <div className="col-lg-7 p-2 p-lg-5">
                        <h1>Good For Our Customer<br/>
                        Experience</h1>
                        <span className='py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry`s standard dummy text.</span>
                    </div>
                        
                    <div className={styles.banner_girl+" col-lg-5 d-none d-lg-flex"}>
                        <Image className='' src={bannerGirl}/>

                    </div>
                </div>

                <div className={styles.faq_container+' mt-5 p-lg-5'}>
                    <div className='row px-2 px-lg-5 py-3'>
                        <div className="col-md-6">
                            <h2 className='text-white pb-3'>FAQ</h2>
                            <span className='text-white'>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.</span>
                        </div>
                        <div className="col-md-6 px-2 px-lg-5">
                            {/* <div className={styles.answer_container+" my-2 p-3"}>
                                <div className="d-flex flex-direction-row justify-content-between">
                                    <span className={styles.question+' text-white'}>Is there a free trial available ?</span>
                                    <div>
                                        <img src={arrowUpIcon} />
                                    </div>
                                </div>
                                <div className={styles.answer+" text-white mt-2"}>
                                    It is a long established fact that a reader will be distracted by the
                                    readable content of a page.
                                </div>
                            </div> */}

                            <Accordion className={styles.accordion_bg}>
                                <Accordion.Item className={styles.accordion_item_bg} eventKey="0">
                                    <Accordion.Header className={styles.accordion_header}>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className={styles.accordion_item_bg} eventKey="1">
                                    <Accordion.Header className={styles.accordion_header}>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className={styles.accordion_item_bg} eventKey="2">
                                    <Accordion.Header className={styles.accordion_header}>Accordion Item #3</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className={styles.accordion_item_bg} eventKey="3">
                                    <Accordion.Header className={styles.accordion_header}>Accordion Item #4</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className={styles.accordion_item_bg} eventKey="4">
                                    <Accordion.Header className={styles.accordion_header}>Accordion Item #5</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item className={styles.accordion_item_bg} eventKey="5">
                                    <Accordion.Header className={styles.accordion_header}>Accordion Item #6</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>

                    </div>
                </div>

                <div className={styles.client_container+' container-fluid p-2 p-md-5 mb-2'}>
                    <div className="row py-3 py-md-5">
                        <div className={styles.client+ " col-md-5"}>
                            <h2>What Our Clients<br/>Say About Us</h2>
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                            </span>
                            <br/>
                            <button type="button" className='my-4'>More About Us</button>
                        </div>
                        <div className='col-lg-7'>
                            <div className=" px-0 px-md-3 row">
                                <div className='col-md-6 mb-2'>
                                    <div className={styles.client_card+" bg-white text-center p-4"}>
                                        <Image src={client1} className='mb-3'/> <br/>
                                        <span>
                                        It is a long established fact that a 
                                        reader will be distracted by the 
                                        readable content of a page.
                                        </span>
                                        <h5>Kevin Yang</h5>
                                        <span>Product management instapage</span>
                                    </div>
                                </div>
                                
                                <div className='col-md-6 mb-2'>
                                    <div className={styles.client_card+" bg-white text-center p-4"}>
                                        <Image src={client2} className='mb-3'/> <br/>
                                        <span>
                                        It is a long established fact that a 
                                        reader will be distracted by the 
                                        readable content of a page.
                                        </span>
                                        <h5>Kevin Yang</h5>
                                        <span>Product management instapage</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-direction-row justify-content-center mt-3'>
                                <div className={styles.arrow_button}>
                                    <Image src={arrowLeft} className='p-3'/>
                                </div>
                                <div className={styles.arrow_button}>
                                    <Image src={arrowRight} className='p-3'/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.feature_container+" container-fluid p-2 p-md-5"}>
                    <div className="row px-3 py-3">
                        <div className={styles.features_left+" col-md-6 p-0"}>
                            <h2>Seamless Bond of Better
                            Customer Satisfaction</h2>

                            <div className='col-lg-6'><span>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.</span></div>
                        </div>
                        <div className={styles.features_right+" col-md-6 justify-content-start justify-content-md-end px-0"}>
                            <button className='btn btn-lg my-3'>Explore Features</button>
                        </div>
                    </div>
                    <div className="row py-3 mb-4">
                        <div className={styles.features_bottom+" col-sm-6 col-lg-3 px-4"}>
                            <div className='p-3 my-2'>
                                <Image src={deliveryIcon} fluid className='m-2' />
                                <h6>We Deliver Experience</h6>
                                <span>
                                    It is a long established fact that a 
                                    reader will be distracted by the 
                                    readable content of a page.
                                </span>
                                <button className='btn my-2 py-2 px-4'>Learn More</button>
                            </div>
                        </div>
                        <div className={styles.features_bottom+" col-sm-6 col-lg-3 px-4 mt-lg-5"}>
                            <div className='p-3 my-2'>
                                <Image src={deliveryIcon} fluid className='m-2' />
                                <h6>We Deliver Experience</h6>
                                <span>
                                    It is a long established fact that a 
                                    reader will be distracted by the 
                                    readable content of a page.
                                </span>
                                <button className='btn my-2 py-2 px-4'>Learn More</button>
                            </div>
                        </div>
                        <div className={styles.features_bottom+" col-sm-6 col-lg-3 px-4"}>
                            <div className='p-3 my-2'>
                                <Image src={deliveryIcon} fluid className='m-2' />
                                <h6>We Deliver Experience</h6>
                                <span>
                                    It is a long established fact that a 
                                    reader will be distracted by the 
                                    readable content of a page.
                                </span>
                                <button className='btn my-2 py-2 px-4'>Learn More</button>
                            </div>
                        </div>
                        <div className={styles.features_bottom+" col-sm-6 col-lg-3 px-4 mt-lg-5"}>
                            <div className='p-3 my-2'>
                                <Image src={deliveryIcon} fluid className='m-2' />
                                <h6>We Deliver Experience</h6>
                                <span>
                                    It is a long established fact that a 
                                    reader will be distracted by the 
                                    readable content of a page.
                                </span>
                                <button className='btn my-2 py-2 px-4'>Learn More</button>
                            </div>
                            {/* <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion> */}
                        </div>

                        
                        {/* <div className={styles.features_bottom+" col-md-3 d-flex align-items-center justify-content-center mx-2 pt-lg-5 mt-lg-5 mb-2"}>
                            <Image src={deliveryIcon} fluid />
                        </div>
                        <div className={styles.features_bottom+" col-md-3 d-flex align-items-center justify-content-center mx-2 mb-2"}>
                            <Image src={deliveryIcon} fluid />
                        </div>
                        <div className={styles.features_bottom+" col-md-3 d-flex align-items-center justify-content-center mx-2 pt-lg-5 mt-lg-5 mb-2"}>
                            <Image src={deliveryIcon} fluid /> 
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );

}

