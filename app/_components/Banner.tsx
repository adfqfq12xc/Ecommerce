'use client'
import React from "react";
import Slider from "react-slick";
import bannerone from '../../public/assets/bannerone.jpg';
import bannertwo from '../../public/assets/bannertwo.jpg';
import bannerthree from '../../public/assets/bannerthree.jpg';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Image from "next/image";
import Bannertext from "./Bannertext";

const Prevarrow = (props: any) => {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute z-20 left-3 top-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center ">
            <PiCaretLeftBold />
        </div>
    );
}

const Nextarrow = (props: any) => {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute right-5 top-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <PiCaretRightBold />
        </div>
    );
}

export default function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: true,
        
        nextArrow: <Nextarrow />,
        prevArrow: <Prevarrow />,
    };
    

    return (
        <div className="w-full h-screen  relative mt-20">
            <Slider {...settings} >
                <div className="w-full h-full  relative mt-4">
                    <Image src={bannerone} alt="Banner One"  className="w-full h-full  relative" />
               <Bannertext  />
               
                </div>
                <div className="w-full h-full relative">
                    <Image src={bannertwo} alt="Banner Two"  className="w-full h-full  relative" />
                    <Bannertext  />
                </div>
                <div className="w-full h-full relative">
                    <Image src={bannerthree} alt="Banner Three"  className="w-full h-full  relative" />
                    <Bannertext  />
                </div>
            </Slider>
        </div>
    );
}
