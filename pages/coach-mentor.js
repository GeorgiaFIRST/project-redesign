import React from 'react';
import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import Header from "../components/header";
import PageBanner from "../components/GetInvolvedPages/CoachMentorPage/pageBanner";
import PageInfo from "../components/GetInvolvedPages/CoachMentorPage/mentorInfo";

let MissionImpact = () => {
    return (
        <div>
            <Header></Header>
            <PageBanner></PageBanner>
            <PageInfo></PageInfo>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    )
}

export default MissionImpact;