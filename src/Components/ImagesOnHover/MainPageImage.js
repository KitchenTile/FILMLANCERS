import React, { useState } from "react";
import home_page_photo from "../../images/RENTALIMAGES/home_page_photo.jpg";
import home_page_photo_bw from "..//../images/RENTALIMAGES/home_page_photo_bw.jpg";

import './MainPageImage.css';

const ImageHoverComponent = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHoverYes = () => {
        setIsHovered(true);
    };
    const handleHoverNo = () => {
        setIsHovered(false);
    };

    return(
        <div>
            {/* <h1 className="h1">↓ RENTAL HOUSES ↓</h1> */}
            <a
                href="/rentalpage"
                className="Homeimage-link"
                onMouseEnter={handleHoverYes}
                onMouseLeave={handleHoverNo}
            >
                <img
                    src= {isHovered ? home_page_photo_bw : home_page_photo}                
                    // src= {isHovered ? "D:/REACTFILMLANCERS/filmlancers/src/images/home_page_photo_bw.jpg" : "D:/REACTFILMLANCERS/filmlancers/src/images/home_page_photo.jpg"}
                    alt="img"
                    className="Homeimage"
                />
                
            </a>
        </div>
    );
};

export default ImageHoverComponent;

