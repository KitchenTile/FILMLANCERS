import React, { useState } from "react";
import home_page_photo from "D:/REACTFILMLANCERS/filmlancers/src/images/home_page_photo.jpg";
import home_page_photo_bw from "D:/REACTFILMLANCERS/filmlancers/src/images/home_page_photo_bw.jpg";
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
            <h1 className="h1">↓ RENTAL HOUSES ↓</h1>
            <a
                href="#"
                className="image-link"
                onMouseEnter={handleHoverYes}
                onMouseLeave={handleHoverNo}
            >
                <img
                    src= {isHovered ? home_page_photo_bw : home_page_photo}                
                    // src= {isHovered ? "D:/REACTFILMLANCERS/filmlancers/src/images/home_page_photo_bw.jpg" : "D:/REACTFILMLANCERS/filmlancers/src/images/home_page_photo.jpg"}
                    
                    className="image"
                />
            </a>
        </div>
    );
};

export default ImageHoverComponent;
