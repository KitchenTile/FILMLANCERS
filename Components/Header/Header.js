 import React, { useState, useEffect } from "react";
 import Headercss from "./Header.module.css"

 const Header = () => {
    //  return (
    //     <div className={`${Headercss.headertit}`}>
    //         <h1 className={`${Headercss.headertitle}`}>
    //             <a href="/" className={`${Headercss.headerlink}`}>
    //                 FILMLANCERS.LON.COM
    //             </a>
    //         </h1>
    //     </div>
        
    // );
    
    const [scrollPosition, setScrollPosition] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
          const position = window.scrollY;
          setScrollPosition(position);
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div className={`${Headercss.headertit}`} style={{ fontSize: scrollPosition > 0 ? "2.5em" : "3.5em"}}>
             <h1 className={`${Headercss.headertitle}`}>
                 <a href="/" className={`${Headercss.headerlink}`}>
                     FILMLANCERS
                 </a>
             </h1>
        </div>
    )
 };


 export default Header;