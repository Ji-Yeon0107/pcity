import React, { useState, useEffect } from "react";
import "./Main.css";
import "./reset.css";
import { MainContent } from "./MainContent";
import { mainPopup } from "../data/popupData";
import { Popup } from "./Popup";


type OfferFormProps = {
    adultNum:number,
    kidNum:number,
    guestNum:number,
    setAdultNum:any,
    setKidNum:any,
    setGuestNum:any,
    setDateRange:any,
    startDate:Date,
    endDate:Date|null
}


export const Main:React.FC<OfferFormProps> = ({adultNum,kidNum,guestNum, setAdultNum, setKidNum, setGuestNum, setDateRange,startDate,endDate,}) => {
      useEffect(()=>{
        const header = document.querySelector('header') as HTMLElement;
        header.className='main-header'
    },[])
    
    return(
      <>            
        {/* <Popup popupTitle={mainPopup.title} /> */}
        <MainContent 
          adultNum={adultNum}
          kidNum={kidNum}
          guestNum={guestNum}
          setAdultNum={setAdultNum}
          setKidNum={setKidNum}
          setGuestNum={setGuestNum}
          setDateRange={setDateRange}
          startDate={startDate}
          endDate={endDate}
        />
      </>
    )
}


