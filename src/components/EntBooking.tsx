import React, { useState } from "react";
import "./reset.css"; 
import "./style/booking.css"; 
import offerItemsData from "../data/entOfferItems.json"


const imageSize = {
    width:"256px",
    height:"168px"
}
interface HotelBookingProps {
    abc:Date;
    def:any;
    setDef:any;
    sortState:boolean;
    setSortState:any;
    setActiveSelect:any;
    offerItems:any;
    sortedItems:any;
    selectOffer:any;
    setSortedItems:any;
    activeSelect:boolean;
    setSelectOffer:any;
    handleOffer:any;
    sumPrices:any;
    setSumPrices:any;
}


export const EntBooking:React.FC<HotelBookingProps> = ({abc,def, setDef, sortState, setSortState,setActiveSelect, setSelectOffer,offerItems,sortedItems,selectOffer,setSortedItems,handleOffer,activeSelect,setSumPrices,sumPrices}) => {

    const [entOfferItems, setEntOfferItems] = useState<any>(offerItemsData);

    return (
        <div className="offer-list">
            <h1>TICEKT</h1>
            <div className="offer-list-header">
                <div className="offer-tags"></div>
                <select className="offer-sort">
                    <option value="highest">높은 가격순</option>
                    <option value="lowest">낮은 가격순</option>
                </select>
            </div>
            <ul className="offer-list-main">
                {
                    entOfferItems.map((offerItem:any, i:number)=>{
                        return(
                            <li className="offer-item" key={i}  onClick ={()=>{
                                setActiveSelect(true);
                                handleOffer();
                                var selList = [...selectOffer, offerItem];
                                setSelectOffer(selList);
                                // 같은 것 선택방지
                                selectOffer.forEach((el:any)=>{
                                if(el===offerItem) {
                                setSelectOffer(selectOffer);
                                }
                                })
                                setSumPrices(Number(offerItem.price.replace(/\,/g,''))+sumPrices)
                            }}>
                                 <p><img style={imageSize} src={"https://ji-yeon0107.github.io/learning/images/"+(offerItem.imgURL)+".jpg"} alt="entoffer" /></p>
                                <p>{offerItem.name}</p>
                                <p>{offerItem.desc}</p>
                                <p>{offerItem.price}원 ~</p>
                                <p></p>
                                <p>
                                    {offerItem.startyear}.{offerItem.startmonth}.{offerItem.startdate} ~ {offerItem.endyear}.{offerItem.endmonth}.{offerItem.enddate}
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="call">
                문의 및 예약   000 - 0000 - 0000
            </div>
        </div>
    )
}
