import React from 'react';
import footer from "./footer.module.css";

let Footer = () => {
    return (
        <div className={`${footer.footerArea}`}>
            <div className={`${footer.singleWidget}`}>
                <h4>How to Volunteer</h4>
                <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open</p>

                <br/>

                <h4>Sitemap</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="mentor.html">Coach/Mentor</a></li>
                </ul>
            </div>
           
            <div className={`${footer.singleWidget}`}>
                <h4>How to Sponsor</h4>
                <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open</p>
                <br/>
                <div className={`${footer.donateButton}`}>
                    <a href="https://google.com">Donate</a>
                </div>
            </div>

            <div className={`${footer.singleWidgetSocial}`}>
                <h4>Social Media</h4>
                <p>need icons</p>
            </div>

            <div className={`${footer.singleWidget}`}>
                <h4>Newsletter</h4>
                <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days open</p>

                <div className={`${footer.formWrap}`}>
                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get">
                        <div className={`${footer.singleWidgetInput}`}>
                            <input type="email" class="form-control" name="EMAIL" placeholder="Your Email Address" onfocus={`${footer.singleWidgetInput}`} onblur={`${footer.singleWidgetInput}`}></input>
                            <div class="input-group-append">
                                <button class="btn click-btn" type="submit">
                                    <i class="fab fa-telegram-plane"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;