import React from "react";
import Header from "../Components/Header/Header";
import ReusableRentalComp from "../Components/ReusableComps/Rentalpagescomps";
import AllData from "../data/AllData";
import "./Rentalpage.css"
import RentalSearchComp from "../Components/ReusableComps/RentalSearchComp";

const RentAllPage = () => {
    return(
        <div className="rentalpage">
            <Header />
            <div className="titlesearchbar">
                {/* <div className="titlecontainer">
                    <h1 className="titles">ALL RENTALS</h1>
                </div> */}
                <div className="searchcontainer">
                    <RentalSearchComp data={ AllData } />
                </div>
            </div>
            <h1 className="titles">ALL RENTALS</h1>
            {AllData.map((data, index) => (
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

export default RentAllPage;