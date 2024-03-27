import React from "react";
import MainCompsData from "../../data/MainPageData";
import Compcss from "./Components.module.css";

const ReusComp = ({ title, text }) => {
    return (
        <div className={`${Compcss.components}`}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
};

const MainComponent = () => {
    return (
        <div>
            {MainCompsData.map((component, index) => (
                <ReusComp
                    key={index}
                    title={component.title}
                    text={component.text}
                />
            ))}
        </div>
    );
};


export default MainComponent;