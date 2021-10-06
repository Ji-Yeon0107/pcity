import { setDayOfYear } from "date-fns";
import React, { useState } from "react";
import "./reset.css"; 
import "./style/booking.css"; 



const imageSize = {
    width:"256px",
    height:"168px"
}

type OfferItems = [{
    [key:string]: string
}]
interface HotelBookingProps {
    abc:Date;
    def:any;
    setDef:any;
    sortState:boolean;
    setSortState:any;
    setActiveSelect:any;
    offerItems:any;
    sortedItems:any;
    setSortedItems:any;
    setSelectOffer:any;
    handleOffer:any;
}


export const HotelBooking:React.FC<HotelBookingProps> = ({abc,def, setDef, sortState, setSortState,setActiveSelect, setSelectOffer,offerItems,sortedItems,setSortedItems,handleOffer}) => {

    
    

    // 날짜
    var 연도:number = abc.getFullYear();
    var pre달 = `0${abc.getMonth()+1}`;
    var pre일 = `0${abc.getDate()}`;

    var 달 = Number(pre달.slice(-2))
    var 일 = Number(pre일.slice(-2))


//     if(endDate !== null) {

//         var 끝연도:number = endDate.getFullYear();
//         var pre끝달 = `0${endDate.getMonth()+1}`;
//         var pre끝일 =`0${endDate.getDate()}`;

//         var 끝달 = Number(pre끝달.slice(-2))
//         var 끝일 = Number(pre끝일.slice(-2))
// }

  

    // filter
    const items = offerItems.filter((data:any)=>{

        if(연도 === Number(data.startyear)){
            if( 달 >= Number(data.startmonth) && 달 <= Number(data.endmonth)) {
                if( 일 >= Number(data.startdate)) {
                    return data
                } else if( 일 <=  Number(data.startdate)) {
                    return data
                }
            }
        } 
    })
    // 정렬 함수(select onChange에 사용)
    const sortHighest = ()=>{
        const copy = [...items]
        const res = copy.sort((a,b)=>{
            return Number(Number(b.price.replace(/\,/g,''))) - Number(Number(a.price.replace(/\,/g,'')))
        });
        setSortedItems(res)
    }
    const sortLowest = ()=> {
        const copy = [...items]
        const res = copy.sort((a,b)=>{
            return Number(Number(a.price.replace(/\,/g,''))) - Number(Number(b.price.replace(/\,/g,'')))
        });
        setSortedItems(res)

    }
    
  
if(sortState) {
    var mapItems = sortedItems.map((offerItem:any, i:number)=>{
        return(
            <li className="offer-item" key={i} onClick={()=>{
                setDef("");
                handleOffer();
                setActiveSelect(true);
                setSelectOffer(offerItem);
            }
            }>
                <p><img style={imageSize} src={"https://ji-yeon0107.github.io/learning/"+(offerItem.imgURL)+".jpg"} alt="offer" /></p>
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
}else {
    var mapItems = items.map((offerItem:any, i:number)=>{
        return(
            <li className="offer-item" key={i} onClick ={()=>{
                handleOffer();
                setActiveSelect(true);
                setSelectOffer(offerItem);
            }}>
                <p><img style={imageSize} src={"./images/"+(offerItem.imgURL)+".jpg"} alt="offer" /></p>
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
    
  
    return (
        <div className="offer-list">
            <h1>HOTEL PARADISE</h1>
            <div className="offer-list-header">
                <div className="offer-tags"></div>
                <select id="price-sort" defaultValue="" name="price-sort" 
                onChange={()=>{
                    setSortState(true)

                    const sortSelect = document.getElementById("price-sort") as HTMLSelectElement
                    var selectValue = sortSelect.options[sortSelect.selectedIndex].value;
                    if (selectValue ==="highest") {
                        sortHighest()
                    } else if (selectValue==="lowest") {
                        sortLowest()
                    } else {
                        const copy = [...items]
                        var res = copy
                        setSortedItems(res)
                    }
                }}
                >
                    <option value="" disabled>정렬</option>
                    <option value="highest">높은 가격순</option>
                    <option value="lowest">낮은 가격순</option>
                </select>
            </div>
            <ul className="offer-list-main">
                {
               mapItems
                }
            </ul>
            <div className="call">
                문의 및 예약   000 - 0000 - 0000
            </div>
        </div>
    )
}
