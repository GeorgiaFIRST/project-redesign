import React from "react";
import pageInfo from "./FRCInfo.module.css";

let FRCInfo = () => {
  return (
    <div>
        <section className={`${pageInfo.latestBlogArea}`}>
            <div className={`${pageInfo.areaHeading}`}>
                <h3>What is FRC?</h3>
                <br/>
                <p>Under strict rules, limited time and resources, teams of students are challenged to raise funds, 
                design a team "brand," hone teamwork skills, and build and program industrial-size robots to play a difficult field 
                game against like-minded competitors. It’s as close to real-world engineering as a student can get. 
                </p>
                <br/>
            </div>
        </section>
        <br/>
        <br/>
    </div>
  );
};

export default FRCInfo;