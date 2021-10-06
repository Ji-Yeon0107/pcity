import React from "react";
import styled from "styled-components";
import { ScrollBox } from "./ScrollBox"
import { OfferForm } from "./OfferForm"


type OfferFormProps = {
    adultNum:number,
    kidNum:number,
    guestNum:number,
    setAdultNum:any,
    setKidNum:any,
    setGuestNum:any,
    setDateRange:any,
    startDate:Date,
    endDate:Date|null,
}

export const MainContent:React.FC<OfferFormProps> = ({adultNum,kidNum,guestNum, setAdultNum, setKidNum, setGuestNum, setDateRange,startDate,endDate}) => {

    return(
        <StyledMainContainer>
            <ScrollBox />
            <OfferForm 
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
        </StyledMainContainer>

    )
}
const StyledMainContainer = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
`
