import React from "react";
import Rentalpagedata from "../data/RentalData";
import Reusablecompimgchange from "../Components/ReusableComps/RentalComps";
import "./Rentalpage.css";
import Header from "../Components/Header/Header";


export const Rentalpage = () => {
    return(
        <div className="rentalpage">
            <Header />
            {Rentalpagedata.map((data, index) => (
                <Reusablecompimgchange
                    key={data.index}
                    title={data.title}
                    img={data.img}
                    img2={data.img2}
                    id={data.id}
                />
            ))}

        </div>

    );
};

export default Rentalpage;