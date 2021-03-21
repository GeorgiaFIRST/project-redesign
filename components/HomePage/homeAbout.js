import React from 'react';
import homeAbout from "./homeAbout.module.css";

let HomeAbout = () => {
    return (
        <div className="container p-10">
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>

            <section className={`${homeAbout.aboutArea}`}>
            <div className="grid sm:cols-1 lg:grid-cols-2">
            <div className={`${homeAbout.areaHeading}`}>
                <h4>About <br/>Georgia<i>FIRST</i></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque necessitatibus consequatur eius quam facere cum iusto iure hic quaerat atque, quis magni fugiat, inventore harum veritatis facilis dolorum voluptate exercitationem.
                </p>
            </div>
            <div className={`${homeAbout.about_image}`}></div>
        </div>
        </section>
        </div>
    );
};

export default HomeAbout;