import React, { useState,useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import "./reset.css"; 
import "./style/booking.css"; 
import DatePicker from "react-datepicker";
import "./style/datepicker.css";
import { HotelBooking } from "./HotelBooking";
import { EntBooking } from "./EntBooking";
import offerItemsData from "../data/offerItems.json"


const selectOfferStyle = {
    width:"100%",
    color:"rgba(49,49,49,1)",
    fontSize:"0.9em",
    padding:"10px",
}
type BookingProps = {
    adultNum:number,
    kidNum:number,
    guestNum:number,
    setAdultNum:any,
    setKidNum:any,
    setGuestNum:any,
    setDateRange:any,
    startDate:Date,
    endDate:Date,
    today:Date,
}
type OfferItems = {
    [key:string]: string,
}

export const Booking:React.FC<BookingProps> = ({adultNum,kidNum,guestNum, setAdultNum, setKidNum, setGuestNum, setDateRange,startDate,endDate,today}) => {

    //총합계금액
    const[sumPrices, setSumPrices] = useState(0);


    const [offerItems, setOfferItems] = useState<any>(offerItemsData);
    const [sortedItems, setSortedItems] = useState<any>(offerItemsData);

    const [selectOffer, setSelectOffer] = useState<any>([])

    // 담기
    const [activeSelect, setActiveSelect] = useState(false);

    // 페이지 이동
    const location = useLocation();
    console.log(location.state);
    

    // 상품정렬상태
    const [sortState, setSortState] = useState(false)

    // 탭관련
    const [activeIndex, setActiveIndex] = useState(0);

    // 날짜관련
    // const today = new Date()
    // const [dateRange, setDateRange] = useState([new Date(), new Date(today.setDate(today.getDate() + 1))]);
    // const [startDate, endDate] = dateRange;

    const[abc,setAbc]= useState<Date>(startDate)
    const[def,setDef]= useState<any>(new Date())

    const[nights,setNights] = useState(1);

        
        var 연도:number = def.getFullYear();
        var pre달 = `0${def.getMonth()+1}`;
        var pre일 = `0${def.getDate()}`;
    
        var 달 = Number(pre달.slice(-2))
        var 일 = Number(pre일.slice(-2))

    if(endDate !== null) {

        var 끝연도:number = endDate.getFullYear();
        var pre끝달 = `0${endDate.getMonth()+1}`;
        var pre끝일 =`0${endDate.getDate()}`;

        var 끝달 = Number(pre끝달.slice(-2))
        var 끝일 = Number(pre끝일.slice(-2))

        var 박 = ()=>{if(달===끝달) {
            setNights(끝일-일)
        }else if(달!==끝달) {
            if(달===1||달===3||달===5||달===7||달===8||달===10||달===12) {
                setNights(끝일+31-일)
            } else {
                setNights(끝일+30-일)
            }
        }
        박()
}}



// 선택된 offer뿌리기

        const sel = selectOffer.map((selOffer:any,i:number)=>{
            return (
                <div style={selectOfferStyle} key={i}>
                    <div>상품명: {selOffer.name}</div>
                    <div>1박 가격: {selOffer.price} </div>
                </div>
            )
        })

        // 선택된 offer제어
        const handleOffer = ()=>{
            setDef(startDate);
    }
   


  useEffect(()=>{
      const header = document.querySelector('header') as HTMLElement;
      header.className='sub-header'
  },[])

    const tabContArr = [
        {
            tabTitle:"호텔",
            tabFile:"HotelBooking",
            tabCont:(
                <div>
                    <div className="tab-content">
                        <div>HOTEL PARADISE</div>
                        <div>
                        
                            <DatePicker
                                onChange={(update:any) => {
                                    setDateRange(update);
                                }}
                                selected={startDate}
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="체크인/체크아웃"
                                monthsShown={2}
                                closeOnScroll={true}
                                minDate={new Date()}
                                maxDate={new Date("12-31-2021")}
                            />
                        </div>
                        <div className="guest guest-booking">
                            <div onClick={()=> {
                                
                                setAdultNum(adultNum-1);
                                if(adultNum <= 1) {
                                    setAdultNum(1)
                                }
                                setGuestNum(adultNum-1+kidNum);
                                
                            }}>-</div>
                            <div>성인 {adultNum}</div>
                            <div onClick={()=> {
                                setAdultNum(adultNum + 1);
                                setGuestNum(adultNum+1+kidNum);

                                if(adultNum >=5) {
                                    setAdultNum(5);
                                    setGuestNum(guestNum);
                                }
                                if(guestNum >=6) {
                                    setAdultNum(adultNum)
                                    setGuestNum(guestNum);
                                }
                                
                            }}>+</div>
                        </div>
                        <div className="guest  guest-booking">
                            <div onClick={()=> {
                                
                                setKidNum(kidNum - 1);
                                if(kidNum <= 0) {
                                    setKidNum(0)
                                }
                                setGuestNum(adultNum+kidNum-1);
                                
                            }}>-</div>
                            <div>어린이 {kidNum}</div>
                            <div onClick={()=> {
                                setKidNum(kidNum + 1);
                                setGuestNum(adultNum+kidNum+1);
                                
                                if(kidNum >= 5) {
                                    setKidNum(5)
                                    setGuestNum(guestNum)
                                }
                                if(guestNum >= 6) {
                                    setKidNum(kidNum)
                                    setGuestNum(guestNum)
                                }
                            }}>+</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="tab-button-box">
                        <button onClick={
                            (e)=>{
                                e.preventDefault();
                                setGuestNum(0);
                                setAdultNum(1);
                                setKidNum(0);
                                setDateRange([new Date(), new Date(today.setDate(today.getDate()))])
                            }
                        }>초기화</button>
                        <button onClick={
                            (e)=>{
                                e.preventDefault();
                                setSortState(false);
                                setAbc(startDate)
                            }
                        }>검색</button>
                    </div>
                    
                </div>
            ),
        },
        {
            tabTitle:"엔터테인먼트",
            tabFile:"EntBooking",
            tabCont:(
                <form>
                    <div className="tab-content">
                        <select>
                            <option>ALL</option> 
                            {/* <option>SPA CIMER</option> 
                            <option>THEME PARK WONDERBOX</option>  */}
                        </select>
                    </div>
                    <hr/>
                    <div className="tab-button-box">
                        <button onClick={(e)=>{
                                e.preventDefault();
                            }}>초기화
                        </button>
                        <button onClick={(e)=>{
                                e.preventDefault();
                                setSortState(false);
                                setAbc(startDate)
                            }}>검색
                        </button>
                    </div>
                </form>
            ),
        },

    ]

    return (
        <div className="wrapper">
            <div className="booking-main">
                <div className="booking-main-center">
                    <div className="tabs-container">
                        <ul className="tabs is-boxed">
                            {tabContArr.map((section,index)=>{
                                return(
                                <li 
                                    className = { 
                                        activeIndex===index
                                        ? "is-active"
                                        : ""
                                    }
                                    onClick = { ()=>setActiveIndex(index) }
                                    key={index}
                                >
                                    {section.tabTitle}
                                </li>
                                )    
                            })}
                        </ul>
                        <div>{tabContArr[activeIndex].tabCont}</div>
                    </div>
                    {
                        tabContArr[activeIndex].tabFile === "HotelBooking"
                        ? <HotelBooking 
                            abc={abc}
                            def={def}
                            setDef={setDef}
                            sortState={sortState}
                            selectOffer={selectOffer}
                            setSortState={setSortState}
                            setActiveSelect = {setActiveSelect}
                            setSortedItems = {setSortedItems}
                            setSelectOffer = {setSelectOffer}
                            handleOffer = {handleOffer}
                            offerItems = {offerItems}
                            sortedItems = {sortedItems}
                            activeSelect ={activeSelect}
                            sumPrices={sumPrices}
                            setSumPrices={setSumPrices}
                        />
                        : <EntBooking 
                            abc={abc}
                            def={def}
                            setDef={setDef}
                            sortState={sortState}
                            selectOffer={selectOffer}
                            setSortState={setSortState}
                            setActiveSelect = {setActiveSelect}
                            setSortedItems = {setSortedItems}
                            setSelectOffer = {setSelectOffer}
                            handleOffer = {handleOffer}
                            offerItems = {offerItems}
                            sortedItems = {sortedItems}
                            activeSelect ={activeSelect}
                            sumPrices={sumPrices}
                            setSumPrices={setSumPrices}
                        />
                    } 
                </div>
                <div className="booking-main-side">
                    <div className="booking-info">
                        <div className="cart">
                            <div className="cart-header">
                                <div>Summary</div>
                                <button onClick={
                                    (e)=>{
                                        e.preventDefault();
                                        setActiveSelect(false);
                                        setSelectOffer([])
                                    }
                                }>전체삭제</button>
                            </div>
                            <div className="cart-cont">
                               { activeSelect
                               ?sel
                               :"담긴 상품이 없습니다." }
                            </div>
                        </div>
                        <ul className="sum">
                            <li>
                                <div>총액</div>
                                <div>{sumPrices.toLocaleString()} 원</div>
                            </li>
                            <li>
                                <div>할인액</div>
                                <div>0 원</div>
                            </li>
                            <hr/>
                            <li>
                                <div>최종금액</div>
                                <div>{sumPrices.toLocaleString()} 원</div>
                            </li>
                        </ul>
                        <div>*VAT 포함</div>
                    </div>
                    <div className="detail-button"><button>날짜 및 인원 선택</button></div>
                </div>
            </div>
        </div>
    )


}


