import React, { useState, useEffect } from "react";
import "./Rentalcomp.css";
import { getReviews } from "../../utils/getReviews.js";

const ReusableRentalComp = ({link, map, img, info }) => {

    const [reviews, setReviews] = useState(null)
    // const [isHovered, setIsHovered] = useState(false);

    // const handleHoverYes = () => {
    //     setIsHovered(true);
    // };
    // const handleHoverNo = () => {
    //     setIsHovered(false);
    // };


    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=reviews&key=AIzaSyBmclYZIWcPFUVgd1W02LB3iPD8-y5_oAA`
            );
            const data = await response.json();
            setReviews(data.result.reviews);

          } catch (error) {
            console.error("Error fetching reviews:", error);

          }
        };
    
        fetchReviews();
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
                
                    {/* <div className="content"> */}
                        <a className="content" href={link}>
                            <div className="info">
                                <div className="info2-container">
                                  <p className="info2">{info}</p>
                                </div>
                            </div>  
                            <div className="reviews">
                                <h2>Reviews</h2>
                                {reviews && (
                                    <div>
                                        
                                        <ul>
                                            {reviews.result.reviews.map((review, index) => (
                                            <li key={index}>{review.rating}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
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
                        </a>
                    {/* </div> */}
               
                {/* )} */}
        </div>
    )
};

export default ReusableRentalComp;