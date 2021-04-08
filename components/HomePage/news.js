import React from "react";
import news from "./news.module.css";

let News = () => {
  return (
    <div className={news.newsContainer}>
    <div className="container p-10">
      <div className={`${news.areaHeading}`}>
        <h4>Latest News</h4>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 mx-auto p-10">
        <li className={news.imageContainer}>
          <a className={news.imageText} href="#">
            News Title
          </a>
          <img className={news.imageGallery} src="/images/banner.jpg" />
        </li>
        <li className={news.imageContainer}>
          <a className={news.imageText} href="#">
            News Title
          </a>
          <img className={news.imageGallery} src="/images/banner.jpg" />
        </li>
        <li className={news.imageContainer}>
          <a className={news.imageText} href="#">
            News Title
          </a>
          <img className={news.imageGallery} src="/images/banner.jpg" />
        </li>
        <li className={news.imageContainer}>
          <a className={news.imageText} href="#">
            News Title
          </a>
          <img className={news.imageGallery} src="/images/banner.jpg" />
        </li>
        <li className={news.imageContainer}>
          <a className={news.imageText} href="#">
            News Title
          </a>
          <img className={news.imageGallery} src="/images/banner.jpg" />
        </li>
        <li className={news.imageContainer}>
          <a className={news.imageText} href="#">
            News Title
          </a>
          <img className={news.imageGallery} src="/images/banner.jpg" />
        </li>
        <li className={news.imageContainer}>
          <a className={news.imageText} href="#">
            News Title
          </a>
          <img className={news.imageGallery} src="/images/banner.jpg" />
        </li>
        <li className={news.imageContainer}>
          <a className={news.imageText} href="#">
            News Title
          </a>
          <img className={news.imageGallery} src="/images/banner.jpg" />
        </li>
      </div>
    </div>
    </div>
  );
};

export default News;
