import React from "react";
import CameraData from "../data/CameraData";
import ReusableRentalComp from "../Components/ReusableComps/Rentalpagescomps";
import "./Rentalpage.css";
import Header from "../Components/Header/Header";
import RentalSearchComp from "../Components/ReusableComps/RentalSearchComp";


export const RentalCameraPage = () => {
    return(
        <div className="rentalpage">
            <Header />
            <RentalSearchComp data={ CameraData } />
            <h1 className="h2">ALL RESULTS</h1>
            {CameraData.map((data, index) => (
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

export default RentalCameraPage;

