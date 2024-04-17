import React, { useState } from "react";
import "./Rentalcomp.css";

const ReusableRentalComp = ({link, map, img, info }) => {
    // const [isHovered, setIsHovered] = useState(false);

    // const handleHoverYes = () => {
    //     setIsHovered(true);
    // };
    // const handleHoverNo = () => {
    //     setIsHovered(false);
    // };


    return(
        <div 
        className="box"
        // onMouseEnter={handleHoverYes}
        // onMouseLeave={handleHoverNo}
        >
            <a 
            href={link}
            className="image-link"
            > 
                <img 
                src={img}
                className="image-link"
                />
            
            </a>
                {/* {isHovered && ( */}
                    <div className="content">
                        <div className="info">
                            <p>{info}</p>
                        </div>
                        <div className="reviews">
                            <h1>Reviews</h1>
                        </div>
                        <div className="map">
                            <iframe className="mapframe"
                                src={map}
                                width="80%"
                                height="70%"
                                style={{border:"0"}}
                                allowfullscreen="true"
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            /> 
                        </div>
                    </div>
                {/* )} */}
        </div>
    )
};

export default ReusableRentalComp;