import React from "react";
import pageBanner from "./pageBanner.module.css";

let PageBanner = () => {
  return (
    <div>
      <section className={`${pageBanner.home_banner_area} ${pageBanner.page_banner}`}>
        <div className={`${pageBanner.banner_inner} ${pageBanner.page_banner}`}>
          <div className={`${pageBanner.overlay}`}></div>

          <div className="banner_inner d-flex align-items-center">
            <div className="row">
                <div className={`${pageBanner.banner_content}`}>
                  <h3 className="text-center">Board Members</h3>
                </div>
            </div>
          </div>
        </div>
        <img className={`${pageBanner.arrow_object}`} src="/images/arrow-object-white.svg" alt="" />

      </section>
    </div>
  );
};

export default PageBanner;
