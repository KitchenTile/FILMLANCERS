import React from "react";
import LightingData from "../data/LighingData";
import ReusableRentalComp from "../Components/ReusableComps/Rentalpagescomps";
import "./Rentalpage.css";
import Header from "../Components/Header/Header";
import RentalSearchComp from "../Components/ReusableComps/RentalSearchComp";



export const RentalLightingPage = () => {
    return(
        <div className="rentalpage">
            <Header />
            <div className="titlesearchbar">
                {/* <div className="titlecontainer">
                    <h1 className="titles">LIGHTING RENTAL</h1>
                </div> */}
                <div className="searchcontainer">
                    <RentalSearchComp data={ LightingData } />
                </div>
            </div>
            <h1 className="titles">LIGHTING RENTALS</h1>
            {LightingData.map((data, index) => (
                <ReusableRentalComp
                key={data.index}
                img={data.img}
                name={data.name}
                link={data.link}
                map={data.map}
                info={data.info}
            />
            ))}

        </div>

    );
};

export default RentalLightingPage;