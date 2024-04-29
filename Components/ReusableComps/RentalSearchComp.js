import React, { useState, useEffect } from "react";
import "./Rentalcomp.css";
import PlaceDetailsComponent from "./Placedetails";

const RentalSearchComp = ({ data }) => {
    const [query, setQuery] = useState("");
    // const [isHovered, setIsHovered] = useState(false);
    
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())  
    );


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

    // const handleHoverYes = () => {
    //     setIsHovered(true);
    // };
    // const handleHoverNo = () => {
    //     setIsHovered(false);
    // };

    
    return (
        <div>
            <div className="box2">
                <form name="search">
                    <input
                        type="text"
                        placeholder="🔎︎"
                        className="input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
            </div>
            {query !== "" ? (<h1 className="titles">SEARCH RESULTS</h1>): null}
            {query !== "" && filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <div 
                    key={index} 
                    className="box"
                    // onMouseEnter={handleHoverYes}
                    // onMouseLeave={handleHoverNo}
                    >
                        <a 
                        href={item.link}
                        className="image-link"
                        > 
                            <img 
                            src={item.img}
                            className="image-link"
                            />
                        
                        </a>
                            {/* {isHovered && ( */}
                                <a className="content" href={item.link}>
                                    <div className="info">
                                        <p className="info2">{item.info}</p>
                                    </div>
                                    <div className="reviews">
                                        <div className="reviews">
                                            {scriptLoaded && <PlaceDetailsComponent placeId={item.placeId}/>}
                                        </div>
                                    </div>
                                    <div className="map">
                                        <iframe 
                                            src={item.map}
                                            width="80%"
                                            height="70%"
                                            style={{border:"0"}}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        /> 
                                    </div>
                                </a>
                            {/* )}  */}
                    </div>
                ))
            ) : (
                query === "" ? null : <div className="nrf">No results found</div>
            )}
        </div>
    );

};

export default RentalSearchComp;