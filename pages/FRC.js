import React from 'react';
import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import Header from "../components/header";
import PageBanner from "../components/ProgramsPages/FRCPage/pageBanner";
import PageInfo from "../components/ProgramsPages/FRCPage/FRCInfo";

let FRC = () => {
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

export default FRC;