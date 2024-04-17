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
            <div className="titlesearchbar">
                <div className="titlecontainer">
                    <h1 className="titles">CAMERA RENTAL</h1>
                </div>
                <div className="searchcontainer">
                    <RentalSearchComp data={CameraData} />
                </div>
            </div>
            <h1 className="titles">ALL RESULTS</h1>
            {CameraData.map((data, index) => (
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

export default RentalCameraPage;

