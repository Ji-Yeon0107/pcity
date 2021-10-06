import React from 'react';
import "./Main.css";

export const MainBackground = ()=>{

    return(
        <React.Fragment>
            <div>
                <img className="bg" src="./images/main0.jpg" alt="background"/>
            </div>
            <div className="bg-box"></div>
            <div>
                <img className="bg-box-init" src="./images/main0.jpg" alt="background"/>
            </div>
        </React.Fragment>
    )
}