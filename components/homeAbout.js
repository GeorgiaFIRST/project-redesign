import React from 'react';
import homeAbout from "./homeAbout.module.css";

let HomeAbout = () => {
    return (
        <div>
            <section class={`${homeAbout.aboutArea}`}>
            <div class="row align-items-center">
            <div class={`${homeAbout.areaHeading}`}>
                <h4>About<br/>Georgia<i>FIRST</i></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque necessitatibus consequatur eius quam facere cum iusto iure hic quaerat atque, quis magni fugiat, inventore harum veritatis facilis dolorum voluptate exercitationem.
                </p>
            </div>
            </div>
            </section>
        </div>
    );
};

export default HomeAbout;