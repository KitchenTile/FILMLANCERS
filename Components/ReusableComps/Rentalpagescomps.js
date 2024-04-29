import React, { useState, useEffect } from "react";
import "./Rentalcomp.css";
import PlaceDetailsComponent from "./Placedetails";


const ReusableRentalComp = ({ link, map, img, info, placeId }) => {

  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBmclYZIWcPFUVgd1W02LB3iPD8-y5_oAA&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setScriptLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


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
            
                    <a className="content" href={link}>
                        <div className="info">
                            <div className="info2-container">
                                <p className="info2">{info}</p>
                            </div>
                        </div>  
                        <div className="reviews">
                            {scriptLoaded && <PlaceDetailsComponent placeId={placeId}/>}
                        </div>
                        <div className="map">
                            <iframe className="mapframe"
                                src={map}
                                width="80%"
                                height="70%"
                                style={{border:"0"}}
                                allowFullScreen="none"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            /> 
                        </div> 
                    </a>
            
            {/* )} */}
    </div>
)
};

export default ReusableRentalComp;