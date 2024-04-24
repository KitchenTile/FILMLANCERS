import React from "react";
import MainCompsData from "../../data/MainPageData";
import Compcss from "./Components.module.css";
import ImageHoverComponent from "../ImagesOnHover/MainPageImage";

const ReusComp = ({ title, text, subtitle1, subtitle2, olist, ulist }) => {
    return (
        // <div className={${Compcss.components}}>
        //     <h2 className={${Compcss.title}}>{title}</h2>
        //     <p>{text}</p>
        // </div>
        <div>
            {/* {data.map((section, index) => ( */}
                <div className={`${Compcss.components}`}>
                   <h2 className={`${Compcss.title}`}>{title}</h2> {/* the alternative here is to grab a subtitle and say after subtitle check for lists or text */}
                   {text && <p>{text}</p>}
                   {subtitle1 && <h2 className={`${Compcss.subtitle}`}>{subtitle1}</h2>}
                   {olist && (
                        <ol className={`${Compcss.list}`}>
                            {olist.map((item, ind) => (
                                <li key={ind} >{item}</li>
                            ))}
                        </ol>
                   )} 
                   {subtitle2 && <h2 className={`${Compcss.subtitle}`}>{subtitle2}</h2>}
                    {ulist && (
                        <ul className={`${Compcss.list}`}>
                            {ulist.map((item, indx) => (
                                <li key={indx} >{item}</li>
                            ))}
                        </ul>
                    )}
                    
                </div>
            {/*   ))}  */}
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
                    text = {component.text}
                    subtitle1={component.subtitle1}
                    subtitle2={component.subtitle2}
                    ulist={component.ulist}
                    olist={component.olist}
                    />
                {index === MainCompsData.length - 4 && <ImageHoverComponent />}
                </div>
            ))}
        </div>
    );
};



export default MainComponent;