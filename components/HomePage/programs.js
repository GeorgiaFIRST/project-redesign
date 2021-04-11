import React from 'react';
import Link from 'next/link';
import programs from "./programs.module.css";

let Programs = () => {
    return (
        <div>
<section className={`${programs.service_area}`}>
        <div className="container">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div>                
                    <div className={`${programs.single_service} ${programs.lego_league_jr}`}>
                        <div className={programs.service_icon}>
                        </div>
                        <div className={programs.service_content}>
                            <h5>FIRST
                                LEGO®
                                League Jr.</h5>
                            <p>Captures young curiosity by exploring real-world scientific challenges, learning teamwork, and working with motorized LEGO® elements.
                            </p>
                            <br/>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`${programs.single_service} ${programs.lego_league}`}>
                        <div className={programs.service_icon}>
                        </div>
                        <div className={programs.service_content}>
                            <h5>FIRST
                                LEGO®
                                League
                                </h5>
                            <p>Elementary and middle school-aged students research a real-world engineering challenge, develop a solution, and compete with LEGO-based robots of their own design </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`${programs.single_service} ${programs.ftc}`}>
                        <div className={programs.service_icon}>
                        </div>
                        <div className={programs.service_content}>
                            <h5>FIRST
                                Tech
                                Challenge</h5>
                            <p>Teams of middle and high school-aged students are challenged to design, build, and program a robot to play a floor game against other teams’ creations.                            </p>
                            <br/>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`${programs.single_service} ${programs.frc}`}>
                        <div className={programs.service_icon}>
                        </div>
                        <div className={programs.service_content}>
                            <h5>FIRST
                                Robotics
                                Competition</h5>
                            <p>Teams of middle and high school-aged students are challenged to design, build, and program a robot to play a floor game against other teams’ creations.
                            </p>
                            <ul>
                                <li><Link href="/FRC"><a>Read More</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>

    );
};

export default Programs;