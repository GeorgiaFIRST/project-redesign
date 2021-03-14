import React from 'react';
import sponsors from "./sponsors.module.css";

let Sponsors = () => {
    return (
        <section className={`${sponsors.brands_area}`}>
            <h3 className={`${sponsors.header3}`}>Sponsors</h3>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="owl-carousel brand-carousel">
                            <div className={sponsors.brands_icons}>
                                <div className={sponsors.brands_icon1}></div>
                                <div className={sponsors.brands_icon2}></div>
                                <div className={sponsors.brands_icon3}></div>
                                <div className={sponsors.brands_icon4}></div>
                                <div className={sponsors.brands_icon5}></div>
                            </div>
                            <div class="single-brand-item d-table">
                                <div class="d-table-cell">
                                    <img src="img/logo/4.png" alt=""/>
                                </div>
                            </div>
                            <div class="single-brand-item d-table">
                                <div class="d-table-cell">
                                    <img src="img/logo/5.png" alt=""/>
                                </div>
                            </div>
                            <div class="single-brand-item d-table">
                                <div class="d-table-cell">
                                    <img src="img/logo/3.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;