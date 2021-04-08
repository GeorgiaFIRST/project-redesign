import React from 'react';
import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import Header from "../components/header";
import PageBanner from "../components/AboutUsPages/BoardMembers/pageBanner";
import PageInfo from "../components/AboutUsPages/BoardMembers/pageInfo";

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