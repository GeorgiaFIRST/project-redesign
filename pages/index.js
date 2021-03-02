import React from 'react';
import Index from "../components/index";
import Programs from "../components/programs";
import Header from "../components/header";
import HomeAbout from "../components/homeAbout";
import Footer from "../components/footer";

const App = () => {
    return (
        <div>
            <Header></Header>
            <Index></Index>
            <Programs></Programs>
            <HomeAbout></HomeAbout>
            <Footer></Footer>
        </div>
    )
}

export default App