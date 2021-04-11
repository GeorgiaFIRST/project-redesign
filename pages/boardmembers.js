import React from 'react';
import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import Header from "../components/header";
import PageBanner from "../components/AboutUsPages/BoardMembersPage/pageBanner";
import PageInfo from "../components/AboutUsPages/BoardMembersPage/pageInfo";

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