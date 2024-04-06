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
            <RentalSearchComp data={ PropData } />
            <h1 className="titles">ALL RESULTS</h1>
            {PropData.map((data, index) => (
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

export default RentalPropPage;