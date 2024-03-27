 import React from "react";
 import Headercss from "./Header.module.css"

 const Header = () => {
     return (
        <div className={`${Headercss.headertit}`}>
            <h1 className={`${Headercss.headertitle}`}>
                <a href="/" className={`${Headercss.headerlink}`}>
                    FILMLANCERS.LON.COM
                </a>
            </h1>
        </div>
        
    );
 };


 export default Header;