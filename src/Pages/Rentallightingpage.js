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
            <RentalSearchComp data={ LightingData } />
            <h1 className="titles">ALL RESULTS</h1>
            {LightingData.map((data, index) => (
                <ReusableRentalComp
                key={data.index}
                img={data.img}
                name={data.name}
                link={data.link}
                map={data.map}
            />
            ))}

        </div>

    );
};

export default RentalLightingPage;