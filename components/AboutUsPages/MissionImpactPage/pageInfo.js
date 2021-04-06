import React from "react";
import pageInfo from "./pageInfo.module.css";

let PageInfo = () => {
  return (
    <div>
        <section className={`${pageInfo.latestBlogArea}`}>
            <div className="row justify-content-center">
                <div className={`${pageInfo.areaHeading}`}>
                    <h3>A global robotics community preparing young people for the future.</h3>
                    <br/>
                    <p>We engage young people in exciting mentor-based programs that build science, engineering and technology skills, 
                        that inspire innovation, and that foster well-rounded life capabilities including self-confidence, 
                        communication, and leadership.</p>
                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                </div>           
            </div>
        </section>
    </div>
  );
};

export default PageInfo;
