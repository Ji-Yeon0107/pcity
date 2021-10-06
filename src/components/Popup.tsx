import React from "react";
import styled from "styled-components";


type PopupProps = {
    popupTitle: string
}
export const Popup:React.FC<PopupProps> = ( { popupTitle }) => {

    return(
        <StyledPopup>
            <div>{popupTitle}</div>
            <div>자세히보기</div>
            <div>X</div>
        </StyledPopup>
    )
}

const StyledPopup= styled.div`
    display:flex;
    justify-content:center;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:45px;
    background:rgba(59,59,59,1);
    text-align:center;
    line-height:45px;
    color:rgba(255,255,255,1);
    font-size:0.85em;
`




