import React from 'react';
import HomeAbout from "../components/HomePage/homeAbout";
import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import Header from "../components/header";
import PageBanner from "../components/MissionImpactPage/pageBanner";

let MissionImpact = () => {
    return (
        <div>
            <Header></Header>
            <PageBanner></PageBanner>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    )
}

export default MissionImpact;