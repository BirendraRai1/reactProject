import { Image } from "react-bootstrap";

import styles from './about.module.css';

import redArrow from '../../../assets/images/red_arrow.svg';
import aboutBanner2 from '../../../assets/images/about_banner2.png';
import vision1 from '../../../assets/images/vision1.png';
import vision2 from '../../../assets/images/vision2.png';
import vision3 from '../../../assets/images/vision3.png';
import vision4 from '../../../assets/images/vision4.png';
import collaborate from '../../../assets/images/collaborate.png';
import tick from '../../../assets/images/Tick.svg';
import realtimeAnalytics from '../../../assets/images/realtime-analytics.svg';
import embeddedAnalytics from '../../../assets/images/embedded-analytics.svg';
import securely from '../../../assets/images/securely.svg';
import intuitive from '../../../assets/images/intuitive.svg';

// import testPerson from '../../../assets/images/test1.png';
// import deals from '../../../assets/images/deals.svg';
// import bus from '../../../assets/images/bus.svg';
// import refundable from '../../../assets/images/refundable.svg';

export default function Home() {
    return(
        <>
            <div className={styles.about_banner+" text-white p-5"}>
                <div className="py-5">
                    <h1 className="display-md-3">Partnership Redefined, </h1>
                    <h1 className="display-md-3">Success Redesigned</h1>
                </div>
            </div>
            <div className={styles.about_section+" text-white"}>
                <div className="row p-3 p-lg-5 align-items-center justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-3 flex align-items-center justify-content-center">
                        <div><h1 className="display-4">About our </h1></div>
                        <div><h1 className="display-4">company</h1></div>
                        <div className="text-danger mt-3">learn more <Image src={redArrow} fluid/></div>
                    </div>
                    <div className="col-md-5 align-items-center justify-content-center">
                        <p>Horeca Alliance proudly presents a pioneering initiative centered around the facilitation of group purchasing orders.</p>
                        <p className="my-3">Through strategic collaborations with diverse manufacturers in the hospitality industry, we offer a seamless platform for procurement. Our distinguished clientele, which includes hotels, restaurants, and cafes, benefits from the convenience of making direct purchases through our website, establishing direct connections with esteemed manufacturers within the sector.</p>
                        <p className="my-3">This approach not only streamlines the procurement process but also fosters a dynamic and efficient network within the realm of hospitality.</p>   
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="px-5 d-flex align-items-center justify-content-center">
                    <Image src={aboutBanner2} fluid/>
                </div>
            </div>
            <div className={styles.our_vision+" text-center p-3 p-lg-5"}>
                <h1 className="display-4">Our Vision</h1>
                <p className="px-1 px-lg-5 mt-4">At Horeca Alliance, we envision a future where the hospitality industry thrives through </p>
                <p className="px-1 px-lg-5">seamless collaboration and resource optimization. Our vision is to be the premier online </p>
                <p className="px-1 px-lg-5">platform that revolutionizes group purchasing for restaurants, hotels, and cafes, fostering </p>
                <p className="px-1 px-lg-5">a dynamic ecosystem where suppliers and customers unite to elevate the indudstry's </p>
                <p className="px-1 px-lg-5">efficiency and success.</p>
            </div>
            <div className="row px-5">
                <div className="col-md-3 d-flex align-items-center justify-content-center mb-2">
                    <Image src={vision1} fluid/>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center pt-lg-5 mt-lg-5 mb-2">
                    <Image src={vision2} fluid/>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center mb-2">
                    <Image src={vision3} fluid/>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center pt-lg-5 mt-lg-5 mb-2">
                    <Image src={vision4} fluid/>
                </div>
            </div>
            <div className={styles.collaborate_section +" row p-3 p-lg-5 "}>
                <div className="col-md-6">
                    <Image src={collaborate} fluid/>
                </div>
                <div className="col-md-6">
                    <h1 className="display-4">Collaborate with Our team anytime, anywhere.</h1>
                    <p className="mt-4 pe-lg-5">                        
                        "Our mission at Horeca Alliance is to empower the hospitality sector by providing a cutting-edge online platform that streamlines group purchasing processes. We are dedicated to creating a vibrant marketplace where suppliers and customers converge, facilitating cost-effective procurement and enhancing the overall operational efficiency of restaurants, hotels, and cafes. Through innovation, transparency, and collaboration, we strive to be the catalyst for positive transformation within the industry, fostering lasting relationships and driving sustainable growth for all stakeholders involved.
                    </p>
                    <div className={styles.collab_tick_section +" row mt-4"}>
                        <div className="col-md-6 my-2"><Image src={tick} fluid/> Organise your data</div>
                        <div className="col-md-6 my-2"><Image src={tick} fluid/> Always in sync</div>
                        <div className="col-md-6 my-2"><Image src={tick} fluid/> Business analytics</div>
                        <div className="col-md-6 my-2"><Image src={tick} fluid/> Embedded analytics</div>
                        <div className="col-md-6 my-2"><Image src={tick} fluid/> Work with any team</div>
                    </div>
                </div>
            </div>
            <div className={styles.explore_career_section+" text-center p-3 p-lg-5"}>
                <h1 className="display-4">Explore Your Career Apportunities With Us</h1>
                <p>At Horea Alliance, we believe in the power of talent, creativity, and dedication. Our team is the heart </p>
                <p> of our success, and we are always on the lookout for passionate individuals who share our vision. </p>
                <p>Explore exciting career opportunities and become a part of our dynamic journey.</p>

                <div className="row">
                    <div className="col-md-3 my-2">
                        <div className={styles.explore_box+" py-5 px-1"}>
                            <Image src={realtimeAnalytics} fluid/>
                            <h4 className="mb-2 mt-4">Realtime analytics</h4>
                            <p className="mb-4">Create reports with an easy to use drag-and-drop designer.</p>
                            <p className="text-danger">Learn More <Image src={redArrow} fluid/></p>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className={styles.explore_box+" py-5 px-1"}>
                            <Image src={securely} fluid/>
                            <h4 className="mb-2 mt-4">Collaborate securely</h4>
                            <p className="mb-4">Create reports with an easy to use drag-and-drop designer.</p>
                            <p className="text-danger">Learn More <Image src={redArrow} fluid/></p>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className={styles.explore_box+" py-5 px-1"}>
                            <Image src={embeddedAnalytics} fluid/>
                            <h4 className="mb-2 mt-4">Embedded analytics</h4>
                            <p className="mb-4">Create reports with an easy to use drag-and-drop designer.</p>
                            <p className="text-danger">Learn More <Image src={redArrow} fluid/></p>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className={styles.explore_box+" py-5 px-1"}>
                            <Image src={intuitive} fluid/>
                            <h4 className="mb-2 mt-4">Easy and intuitive</h4>
                            <p className="mb-4">Create reports with an easy to use drag-and-drop designer.</p>
                            <p className="text-danger">Learn More <Image src={redArrow} fluid/></p>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    );
}