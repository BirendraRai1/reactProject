import { Image } from "react-bootstrap";

import styles from './caseStudy.module.css';

import caseStudy1 from '../../../assets/images/caseStudy1.png';
import caseStudySec21 from '../../../assets/images/case_study_sec21.png';
import caseStudySec22 from '../../../assets/images/case_study_sec22.png';
import award1 from '../../../assets/images/award1.png';
import award2 from '../../../assets/images/award2.png';
import award3 from '../../../assets/images/award3.png';
import award4 from '../../../assets/images/award4.png';
import award5 from '../../../assets/images/award5.png';
import award6 from '../../../assets/images/award6.svg';

export default function CaseStudy() {
    return(
        <>
            <div className={styles.caseStudyBanner+" text-white p-5"}>
                <div className="py-5">
                    {/* <p>Partnership Redefined, </p>
                    <p>Success Redesigned</p> */}
                </div>
            </div>
            <div className={styles.case_study_section1+" row p-lg-5 my-4"}>
                <div className="col-md-6">
                    <Image src={caseStudy1} fluid/>
                </div>
                <div className="col-md-6 px-4">
                    <h1 className="display-4">What is Group Purchasing Organization</h1>
                    <p className="mt-4">A Group Purchasing Organization (GPO) serves as a collective purchasing entity that brings together multiple businesses, such as hotels, restaurants, and other hospitality establishments, to negotiate and secure advantageous deals on a wide range of products and services. The primary goal is to leverage the combined purchasing volume of member businesses to achieve cost savings, improve efficiency, and streamline procurement processes.</p>
                    <p className="mt-2">GPOs establish and maintain relationships with a network of suppliers across various industries. These suppliers are often vetted for quality, reliability, and compliance with industry standards.</p>
                    <p className="mt-2">Members of a GPO gain access to a broader range of resources, including a diverse supplier network, industry insights, and educational resources related to procurement and supply chain management.</p>
                    <button className={styles.case_study_section1_btn+" btn btn-block mt-2"}>Explore</button>
                </div>
            </div>
            <div className={styles.case_study_section2+" px-3 px-lg-5"}>
                    <h1 className="text-center display-4">Cost Savings through Bulk <br/>Purchasing</h1>
                    <div className="row p-lg-5">
                        <div className="col-md-6">
                            <h3 className={styles.header31+ " my-2"}>01</h3>
                            <h3 className={styles.header32+ " my-2"}>Scenario</h3>
                            <p className="my-2 w-75">A group of independently-owned hotels decides to join a hospitality GPO to consolidate their purchasing power. The GPO negotiates bulk contracts with suppliers for items such as linens, toiletries, and cleaning supplies.</p>
                            <Image src={caseStudySec21} fluid/>
                        </div>
                        <div className="col-md-6">
                            <h3 className={styles.header31+ " my-2"}>02</h3>
                            <h3 className={styles.header32+ " my-2"}>Outcome</h3>
                            <p className="my-2 w-75">The hotels collectively achieve significant cost savings through bulk purchasing, as the GPO negotiates favorable pricing and terms. Individually, each hotel might have struggled to secure such advantageous deals.</p>
                            <Image src={caseStudySec22} fluid/>
                        </div>
                    </div>
            </div>
            <div className={styles.case_study_award + " text-center mt-5"}>
                <h4>Awards</h4>
                <h3 className="my-4 px-2 display-6">An <span>award winning</span> platform, <span>loved by customers.</span></h3>
                <div className="row p-3 p-lg-5">
                    <div className="col-md-4 px-lg-5">
                        <div className={styles.card1+" my-4 p-5"}>
                            <Image src={award1} fluid/>
                            <h6 className="mt-4">Market leader across <br/> 18 categories</h6>
                        </div>
                    </div>
                    <div className="col-md-4 px-lg-5">
                        <div className={styles.card2+" my-4 p-5"}>
                            <Image src={award2} fluid/>
                            <h6 className="mt-4">Most loved SaaS tool <br/> in 2021</h6>
                        </div>
                    </div>
                    <div className="col-md-4 px-lg-5">
                        <div className={styles.card3+" my-4 p-5"}>
                            <Image src={award3} fluid/>
                            <h6 className="mt-4">Category leader <br/> in 2022</h6>
                        </div>
                    </div>
                    <div className="col-md-4 px-lg-5">
                        <div className={styles.card4+" my-4 p-5"}>
                            <Image src={award4} fluid/>
                            <h6 className="mt-4">Most recommended <br/> tool in 2021</h6>
                        </div>
                    </div>
                    <div className="col-md-4 px-lg-5">
                        <div className={styles.card5+" my-4 p-5"}>
                            <Image src={award5} fluid/>
                            <h6 className="mt-4">Champion in survey <br/> tool 2022</h6>
                        </div>
                    </div>
                    <div className="col-md-4 px-lg-5">
                        <div className={styles.card6+" my-4 p-5"}>
                            <Image src={award6} fluid/>
                            <h6 className="mt-4">Top performer spring <br/> 2021</h6>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    );
}
