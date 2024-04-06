import React, { useState } from "react";
// import "./ImagesOnHover/MainPageImage.css";
import "./RentalImageChange.css";



const Reusablecompimgchange = ({ title, img, img2, id }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHoverYes = () => {
        setIsHovered(true);
    };
    const handleHoverNo = () => {
        setIsHovered(false);
    };

    return(
        <div>
            <a  href={id}
                className="image-link"
                onMouseEnter={handleHoverYes}
                onMouseLeave={handleHoverNo}>
                    {/* <h1 className="h1">{title}</h1> */}
                    <img
                     src={isHovered ? img2 : img}
                    //  src={isHovered ? home_page_photo_bw : home_page_photo}
                     alt={title}
                     className="image"
                    />
            </a>
        </div>
    );
};


export default Reusablecompimgchange;