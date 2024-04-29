import React from "react";
import PropData from "../data/PropsData";
import ReusableRentalComp from "../Components/ReusableComps/Rentalpagescomps";
import "./Rentalpage.css";
import Header from "../Components/Header/Header";
import RentalSearchComp from "../Components/ReusableComps/RentalSearchComp";


export const RentalPropPage = () => {
    return(
        <div className="rentalpage">
            <Header />
            <div className="titlesearchbar">
                {/* <div className="titlecontainer">
                    <h1 className="titles">ART DEPARTMENT RENTAL</h1>
                </div> */}
                <div className="searchcontainer">
                    <RentalSearchComp data={ PropData } />
                </div>
            </div>
            <h1 className="titles">ART DEPARTMENT RENTAL</h1>
            {PropData.map((data, index) => (
                <ReusableRentalComp
                key={data.index}
                img={data.img}
                name={data.name}
                link={data.link}
                map={data.map}
                info={data.info}
                placeId={data.placeId}

            />
            ))}

        </div>

    );
};

export default RentalPropPage;