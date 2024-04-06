import React from "react";
import SoundData from "../data/SoundData";
import ReusableRentalComp from "../Components/ReusableComps/Rentalpagescomps";
import "./Rentalpage.css";
import Header from "../Components/Header/Header";
import RentalSearchComp from "../Components/ReusableComps/RentalSearchComp";


export const RentalSoundPage = () => {
    return(
        <div className="rentalpage">
            <Header />
            <RentalSearchComp data={ SoundData } />
            <h1 className="titles">ALL RESULTS</h1>
            {SoundData.map((data, index) => (
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

export default RentalSoundPage;