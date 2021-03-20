import React from "react";
import pageInfo from "./mentorInfo.module.css";

let MentorInfo = () => {
  return (
    <div>
        <section className={`${pageInfo.latestBlogArea}`}>
            <div className={`${pageInfo.areaHeading}`}>
                <h3>Your contribution to the success of FIRST programs is immeasurable.</h3>
                <br/>
                <p>Mentors and Coaches are individuals from all backgrounds and disciplines who work with students to share their knowledge and guide them through the season.
                    They are the key ingredient to the success of a FIRST team.</p>
                <br/>
                <h4>The requirements:</h4>
                <p>1. </p>
            </div>           
        </section>
        <br/><br/>
    </div>
  );
};

export default MentorInfo;