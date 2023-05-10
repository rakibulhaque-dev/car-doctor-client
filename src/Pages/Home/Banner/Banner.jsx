import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="w-full carousel">
            <div id="slide1" className="relative w-full carousel-item">
                <img src={img1} className="w-full" />
                <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide4" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="relative w-full carousel-item">
                <img src={img2} className="w-full" />
                <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide4" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="relative w-full carousel-item">
                <img src={img3} className="w-full" />
                <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide4" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="relative w-full carousel-item">
                <img src={img4} className="w-full" />
                <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide4" className="mr-5 btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;