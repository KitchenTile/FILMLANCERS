import React from "react";
import MainCompsData from "../../data/MainPageData";
import Compcss from "./Components.module.css";
import ImageHoverComponent from "../ImagesOnHover/MainPageImage";

const ReusComp = ({ title, text }) => {
    return (
        <div className={`${Compcss.components}`}>
            <h2 style={{color: "#ff9138"}}>{title}</h2>
            <p>{text}</p>
        </div>
    )
};

const MainComponent = () => {
    return (
        <div >
            {MainCompsData.map((component, index) => (
                <div key={index}>
                    <ReusComp
                        title={component.title}
                        text={component.text}
                    />
                {index === MainCompsData.length - 4 && <ImageHoverComponent />}
                </div>
            ))}
        </div>
    );
};


export default MainComponent;