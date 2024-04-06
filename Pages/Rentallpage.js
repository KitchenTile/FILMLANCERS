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
            <RentalSearchComp data={ AllData } />
            <h1 className="titles">ALL RESULTS</h1>
            {AllData.map((data, index) => (
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

export default RentAllPage;