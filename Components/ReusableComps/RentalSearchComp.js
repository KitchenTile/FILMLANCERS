import React, { useState } from "react";
import "./Rentalcomp.css";

const RentalSearchComp = ({ data }) => {
    const [query, setQuery] = useState("");
    // const [isHovered, setIsHovered] = useState(false);
    
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    // const handleHoverYes = () => {
    //     setIsHovered(true);
    // };
    // const handleHoverNo = () => {
    //     setIsHovered(false);
    // };

    
    return (
        <div >
            <div className="box">
                <input 
                    type="text"
                    placeholder="Search..."
                    className="input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            {/* {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <a href={item.link}>
                        <h1>{item.link}</h1>
                    </a>
                    <div>
                        <iframe 
                        src={item.map}
                        width="850"
                        height="450"
                        style={{border:"0"}}
                        allowfullscreen="true"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        /> 
                    </div>
                </div>
                ))
            ) : (
                <div>No results found</div>
            )} */}
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
                                <div className="content">
                                    <div className="info">
                                        <a href={item.link}><h1>{item.link}</h1></a>
                                    </div>
                                    <div className="reviews">
                                        <h1>Reviews</h1>
                                    </div>
                                    <div className="map">
                                        <iframe 
                                            src={item.map}
                                            width="80%"
                                            height="70%"
                                            style={{border:"0"}}
                                            allowfullscreen=""
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"
                                        /> 
                                    </div>
                                </div>
                            {/* )}  */}
                    </div>
                ))
            ) : (
                query === "" ? null : <div>No results found</div>
            )}
        </div>
    );

};

export default RentalSearchComp;