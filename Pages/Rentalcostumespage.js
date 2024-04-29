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
            <div className="titlesearchbar">
                {/* <div className="titlecontainer">
                    <h1 className="titles">COSTUME RENTAL</h1>
                </div> */}
                <div className="searchcontainer">
                    <RentalSearchComp data={ CostumeData } />
                </div>
            </div>
            <h1 className="titles">COSTUME RENTALS</h1>
            {CostumeData.map((data, index) => (
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

export default RentalCostumePage;