import React from 'react';
import index from "./index.module.css";

let Index = () => {
    return (
        <div className={index.banner}>
            <div className={index.overlay}>
                <div className={`${index.pic_wrapper}`}>
                    <div className={`${index.figure} ${index.pic_1}`}></div>
                    <div className={`${index.figure} ${index.pic_2}`}></div>
                    <div className={`${index.figure} ${index.pic_3}`}></div>
                    <div className={`${ index.figure} ${index.pic_4}`}></div>
                  </div>
            </div>
            <div className="px-8 pt-40 pb-40 mx-auto lg:px-4 h-100" >
                <div className="container mx-auto banner-content">
                    <h1 className="p-2 text-5xl text-white rounded-md px-2 w-auto">Georgia<i>FIRST</i></h1>
                    <p className="p-2 text-md rounded-md  text-white px-2 w-auto">Combining the excitement of sport with the rigors of science and technology</p>
                </div>

            </div>
        
    </div>

    );
};

export default Index;