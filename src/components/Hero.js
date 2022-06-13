import React from "react";
import Photos from "../images/tiled_images.png"

export default function Hero() {
    return(
        <div className="hero_container">
            <img 
                src={Photos} 
                alt="photos" 
                className="tiled_container" 
            />
            <h1 className="hero_header">Online Experiences</h1>
            <p className="hero_text">Join unique interactive activites led by</p>
            <p className="hero_text">one-of-a-kind hosts, all without leaving</p>
            <p className="hero_text">home.</p>
        </div>
    );
}