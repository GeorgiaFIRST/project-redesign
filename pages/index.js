import React from 'react';
import Index from "../components/HomePage/index";
import Programs from "../components/HomePage/programs";
import Header from "../components/header";
import HomeAbout from "../components/HomePage/homeAbout";
import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import News from "../components/HomePage/news";
const App = () => {
    return (
        <div>
            <Header></Header>
            <Index></Index>
            <Programs></Programs>
            <HomeAbout></HomeAbout>
            <News></News>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    )
}

export default App;