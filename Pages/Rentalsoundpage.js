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
            <div className="titlesearchbar">
                {/* <div className="titlecontainer">
                    <h1 className="titles">SOUND RENTAL</h1>
                </div> */}
                <div className="searchcontainer">
                    <RentalSearchComp data={ SoundData } />
                </div>
            </div>
            <h1 className="titles">SOUND RENTALS</h1>
            {SoundData.map((data, index) => (
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

export default RentalSoundPage;