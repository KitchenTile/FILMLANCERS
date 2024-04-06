import React from "react";
import CostumeData from "../data/CostumesData";
import ReusableRentalComp from "../Components/ReusableComps/Rentalpagescomps";
import "./Rentalpage.css";
import Header from "../Components/Header/Header";
import RentalSearchComp from "../Components/ReusableComps/RentalSearchComp";


export const RentalCostumePage = () => {
    return(
        <div className="rentalpage">
            <Header />
            <RentalSearchComp data={ CostumeData } />
            <h1 className="titles">ALL RESULTS</h1>
            {CostumeData.map((data, index) => (
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

export default RentalCostumePage;