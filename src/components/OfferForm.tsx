import React,{ useState } from "react";
import {useHistory } from "react-router-dom";
import "./Main.css"
import DatePicker from "react-datepicker";
import styled from "styled-components"
import "./style/datepicker.css";


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


export const OfferForm:React.FC<OfferFormProps> = ({adultNum,kidNum,guestNum, setAdultNum, setKidNum, setGuestNum, setDateRange,startDate,endDate}) => {
    // 페이지 이동
    const history = useHistory();
    

    //날짜관련
    // const today = new Date()
    // const [dateRange, setDateRange] = useState([new Date(),new Date(today.setDate(today.getDate() + 1))]);
    // const [startDate,endDate] = dateRange;


    const [nights, setNights] = useState<number>(1);

    var 연도:number = startDate.getFullYear();
    var pre달 = `0${startDate.getMonth()+1}`;
    var pre일 = `0${startDate.getDate()}`;

    var 달 = Number(pre달.slice(-2))
    var 일 = Number(pre일.slice(-2))

    const [sortState, setSortState] = useState(false)

    if(endDate !== null) {

        var 끝연도:number = endDate.getFullYear();
        var pre끝달 = `0${endDate.getMonth()+1}`;
        var pre끝일 =`0${endDate.getDate()}`;

        var 끝달 = Number(pre끝달.slice(-2))
        var 끝일 = Number(pre끝일.slice(-2))

    }   

    // function handleNights() {
    //     if(달===끝달) {
    //        setNights(끝일-일)
    //     }
    // }

    return(
        <form className="offer-form">
            
            <div className="offer-form-inside">
                <div>
                    <p>호텔/시설 선택</p>
                    <select>
                        <option>호텔파라다이스</option>
                    </select>
                </div>
                <div className="checkin-box">
                    <span>체크인</span>
                    <span>체크아웃</span>
                    <div>
                        <DatePicker
                            selected={startDate}
                            monthsShown={2}
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update:any) => {
                                
                                setDateRange(update);
                                // handleNights();
                                
                            }}
                            minDate={new Date()}
                            maxDate={new Date("12-31-2021")}
                            withPortal
                            
                            />
                    </div>
                    {/* <div><span>{nights}</span> 박</div> */}
                </div>
                
                <div className="guests">
                    <div className="guest">
                        <div onClick={()=> {
                            
                            setAdultNum(adultNum-1);
                            if(adultNum <= 1) {
                                setAdultNum(1)
                            }
                            setGuestNum(adultNum-1+kidNum);
                            
                        }}>-</div>
                        <div>성인 <span>{adultNum}</span></div>
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
                    <div className="guest">
                        <div onClick={()=> {
                            
                            setKidNum(kidNum - 1);
                            if(kidNum <= 0) {
                                setKidNum(0)
                            }
                            setGuestNum(adultNum+kidNum-1);
                            
                        }}>-</div>
                        <div>어린이 <span>{kidNum}</span></div>
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
                <SearchButton onClick={() => {
                    
                    history.push({pathname: '/booking'})
                }}>검색
                </SearchButton>
            </div>
        </form>

    )
}
const SearchButton = styled.p`
    width:150px;
    height:45px;
    line-height:45px;
    text-align:center;
    border:none;
    background:rgba(158, 142, 93, 1);
    color:rgba(255,255,255,1);
    margin-top:37.5px;
    :hover { cursor:pointer };
    :active { 
        background :rgba(255,255,255,1);
        color:rgba(158, 142, 93, 1);
    };
`
