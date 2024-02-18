import { Image } from "react-bootstrap";

import styles from './team.module.css';

// import caseStudySec21 from '../../../assets/images/case_study_sec21.png';
// import caseStudySec22 from '../../../assets/images/case_study_sec22.png';
import team1 from '../../../assets/images/team-1.png';
import team2 from '../../../assets/images/team-2.png';
import team3 from '../../../assets/images/team-3.png';
import team4 from '../../../assets/images/team-4.png';
import team5 from '../../../assets/images/team-5.png';
import team6 from '../../../assets/images/team-6.png';
import team7 from '../../../assets/images/team-7.png';
import team8 from '../../../assets/images/team-8.png';
import teamFb from '../../../assets/images/team-facebook.svg';
import teamIn from '../../../assets/images/team-instagram.svg';
import teamTw from '../../../assets/images/team-twitter.svg';

export default function Team() {
    return(
        <>
            <div className={styles.teamBanner+" text-white p-5"} >
                <div className="py-5">
                    <h1>Meet the Team </h1>
                    <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                        Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                </div>
            </div>
            <div className={styles.team_section1+" text-center px-2 px-lg-5 my-4"}>
                    <h5 className="display-6">OUR TEAM</h5>
                    <h4 className="display-4">Meet the Clonify team</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the <br/> majority have suffered in some form, by injected humour</p>
                    <div className="my-4">
                        <div className="row">
                            <div className="col-md-3 p-4"> 
                                <div className={styles.team_card}>
                                    <Image src={team1} fluid/>
                                    <div className="my-4">
                                        <h5 className="ps-4 d-flex">Jocelyn Schleifer</h5>
                                        <h6 className="my-2 ps-4 d-flex">Software Engineer</h6>
                                        <p className="px-2">There are many variations of passages of Lorem Ipsum available</p>
                                        <div className="mt-3">
                                            <div className="row">
                                                <div className="col-6 d-flex">
                                                    <Image className={styles.teamSocial+" mx-1 p-1"} src={teamFb}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamIn}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamTw}/>
                                                </div>
                                                <div className="col-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4"> 
                                <div className={styles.team_card}>
                                    <Image src={team2} fluid/>
                                    <div className="my-4">
                                        <h5 className="ps-4 d-flex">Jocelyn Schleifer</h5>
                                        <h6 className="my-2 ps-4 d-flex">Software Engineer</h6>
                                        <p className="px-2">There are many variations of passages of Lorem Ipsum available</p>
                                        <div className="mt-3">
                                            <div className="row">
                                                <div className="col-6 d-flex">
                                                    <Image className={styles.teamSocial+" mx-1 p-1"} src={teamFb}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamIn}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamTw}/>
                                                </div>
                                                <div className="col-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4"> 
                                <div className={styles.team_card}>
                                    <Image src={team3} fluid/>
                                    <div className="my-4">
                                        <h5 className="ps-4 d-flex">Jocelyn Schleifer</h5>
                                        <h6 className="my-2 ps-4 d-flex">Software Engineer</h6>
                                        <p className="px-2">There are many variations of passages of Lorem Ipsum available</p>
                                        <div className="mt-3">
                                            <div className="row">
                                                <div className="col-6 d-flex">
                                                    <Image className={styles.teamSocial+" mx-1 p-1"} src={teamFb}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamIn}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamTw}/>
                                                </div>
                                                <div className="col-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4"> 
                                <div className={styles.team_card}>
                                    <Image src={team4} fluid/>
                                    <div className="my-4">
                                        <h5 className="ps-4 d-flex">Jocelyn Schleifer</h5>
                                        <h6 className="my-2 ps-4 d-flex">Software Engineer</h6>
                                        <p className="px-2">There are many variations of passages of Lorem Ipsum available</p>
                                        <div className="mt-3">
                                            <div className="row">
                                                <div className="col-6 d-flex">
                                                    <Image className={styles.teamSocial+" mx-1 p-1"} src={teamFb}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamIn}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamTw}/>
                                                </div>
                                                <div className="col-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4"> 
                                <div className={styles.team_card}>
                                    <Image src={team5} fluid/>
                                    <div className="my-4">
                                        <h5 className="ps-4 d-flex">Jocelyn Schleifer</h5>
                                        <h6 className="my-2 ps-4 d-flex">Software Engineer</h6>
                                        <p className="px-2">There are many variations of passages of Lorem Ipsum available</p>
                                        <div className="mt-3">
                                            <div className="row">
                                                <div className="col-6 d-flex">
                                                    <Image className={styles.teamSocial+" mx-1 p-1"} src={teamFb}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamIn}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamTw}/>
                                                </div>
                                                <div className="col-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4"> 
                                <div className={styles.team_card}>
                                    <Image src={team6} fluid/>
                                    <div className="my-4">
                                        <h5 className="ps-4 d-flex">Jocelyn Schleifer</h5>
                                        <h6 className="my-2 ps-4 d-flex">Software Engineer</h6>
                                        <p className="px-2">There are many variations of passages of Lorem Ipsum available</p>
                                        <div className="mt-3">
                                            <div className="row">
                                                <div className="col-6 d-flex">
                                                    <Image className={styles.teamSocial+" mx-1 p-1"} src={teamFb}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamIn}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamTw}/>
                                                </div>
                                                <div className="col-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4"> 
                                <div className={styles.team_card}>
                                    <Image src={team7} fluid/>
                                    <div className="my-4">
                                        <h5 className="ps-4 d-flex">Jocelyn Schleifer</h5>
                                        <h6 className="my-2 ps-4 d-flex">Software Engineer</h6>
                                        <p className="px-2">There are many variations of passages of Lorem Ipsum available</p>
                                        <div className="mt-3">
                                            <div className="row">
                                                <div className="col-6 d-flex">
                                                    <Image className={styles.teamSocial+" mx-1 p-1"} src={teamFb}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamIn}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamTw}/>
                                                </div>
                                                <div className="col-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-4"> 
                                <div className={styles.team_card}>
                                    <Image src={team8} fluid/>
                                    <div className="my-4">
                                        <h5 className="ps-4 d-flex">Jocelyn Schleifer</h5>
                                        <h6 className="my-2 ps-4 d-flex">Software Engineer</h6>
                                        <p className="px-2">There are many variations of passages of Lorem Ipsum available</p>
                                        <div className="mt-3">
                                            <div className="row">
                                                <div className="col-6 d-flex">
                                                    <Image className={styles.teamSocial+" mx-1 p-1"} src={teamFb}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamIn}/>
                                                    <Image className={styles.teamSocial+" mx-2 p-1"} src={teamTw}/>
                                                </div>
                                                <div className="col-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                
            </div>
        </>
    );
}
