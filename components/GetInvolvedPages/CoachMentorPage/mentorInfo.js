import React from "react";
import pageInfo from "./mentorInfo.module.css";

let MentorInfo = () => {
  return (
    <div>
        <section className={`${pageInfo.latestBlogArea}`}>
            <div className={`${pageInfo.areaHeading}`}>
                <h3>Your contribution to the success of FIRST programs is immeasurable.</h3>
                <br/>
                <p>Mentors and coaches are individuals from all backgrounds and disciplines who work with students to share their knowledge and guide them through the season.
                    They are the key ingredient to the success of a FIRST team.</p>
                <br/>
                <h4>The requirements:</h4>
                <p>1. </p>
                <br/>
            </div>
            <div className={`${pageInfo.link}`}>
              <p2><a href="https://www.firstinspires.org/ways-to-help/volunteer/mentors-and-coaches" target="_blank" rel="noopener noreferrer">Read more about how to mentor/coach directly from FIRST.</a></p2>           
            </div>
        </section>
        <br/>
        <br/>
    </div>
  );
};

export default MentorInfo;