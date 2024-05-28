import React from "react";
import image from "../../assets/react";

export default function Home(){
    return(
        <>
    <div className="bg-lightGreen flex justify-center items-center">
            <img src={image} className="rounded-full"/>
            <h2 className="white">START FRAMEWORK</h2>
            <p className="flex justify-between">
            <i class="fa-light fa-minus white"></i>
            <i class="fa-solid fa-star white"></i>
            <i class="fa-light fa-minus white"></i>
            </p>
            <p className="white">Graphic Artist - Web Designer - Illustrator</p>
         </div>


        </>
    )
}