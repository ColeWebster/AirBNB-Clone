import React from "react";
import Photos from "../images/tiled_images.png"

export default function Hero() {
    return(
        <div className="hero_container">
            <img 
                src={Photos} 
                alt="photos" 
                className="hero_image" 
            />
            <h1 className="hero_header">Online Experiences</h1>
            <p className="hero_text">Join unique interactive activites led by one-of-a-kind hosts, all without leaving home.</p>
        </div>
    );
}