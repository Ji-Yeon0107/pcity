import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import "./Main.css"


export const RightMenu:React.FC = () => {

    return(
        <nav className="nav-right">
            <div>로그인</div>
            <div>예약확인</div>
            {/* <div>고객지원</div>
            <div>멤버쉽</div> */}
            <div className="nav-bg"></div>     
        </nav>
    )
}
export const LeftMenu:React.FC = () => {

    return(
        <nav className="nav-left">
            <div><Link to="/"><img src="images/main_logo.png" alt="mainlogo" /></Link></div>
            <div>SPECIAL OFFERS
                <ul className="menulist-box">
                    <li>
                        <div>HOTEL</div>
                        <div>PACKAGE & TICEKT</div>
                        <div><Link to="/booking">HOTEL</Link></div>
                        <div><Link to="/booking">ENTERTAINMENT</Link></div>
                    </li>
                    {/* <li>
                        <div>HOTEL</div>
                        <div>EVENT & PROMOTION</div>
                        <div><Link to="/hotels">OVERVIEW</Link></div>
                        <div><Link to="/hotels">STAY</Link></div>
                        <div><Link to="/hotels">DINING</Link></div>
                        <div><Link to="/hotels">MEMBERSHIP</Link></div>
                    </li> */}
                </ul>
            </div>
            {/* <div><Link to="/hotels">HOTELS</Link>
                <ul className="menulist-box">
                    <li>
                        <div>HOTEL</div>
                        <div>PARADISE</div>
                        <div><Link to="/hotels">OVERVIEW</Link></div>
                        <div><Link to="/hotels">객실</Link></div>
                        <div><Link to="/hotels">고객지원</Link></div>
                    </li>
                    <li>
                        <div>HOTEL</div>
                        <div>ARD PARADISO</div>
                        <div><Link to="/hotels">OVERVIEW</Link></div>
                        <div><Link to="/hotels">객실</Link></div>
                        <div><Link to="/hotels">고객지원</Link></div>
                    </li>
                </ul>
            </div>
            <div><Link to="/dining">DINING</Link>
                <ul className="menulist-box">
                    <li>
                        <div>PACKAGE & TICEKT</div>
                        <div></div>
                        <div>HOTEL</div>
                        <div>ENTERTAINMENT</div>
                    </li>
                    <li>
                        <div>EVENT & PROMOTION</div>
                        <div></div>
                        <div>OVERVIEW</div>
                        <div>STAY</div>
                        <div>DINING</div>
                        <div>MEMBERSHIP</div>
                    </li>
                </ul>
            </div>
            <div><Link to="/artainment">ARTAINMENT</Link>
                <ul className="menulist-box">
                    <li>
                        <div>PACKAGE & TICEKT</div>
                        <div></div>
                        <div>HOTEL</div>
                        <div>ENTERTAINMENT</div>
                    </li>
                    <li>
                        <div>EVENT & PROMOTION</div>
                        <div></div>
                        <div>OVERVIEW</div>
                        <div>STAY</div>
                        <div>DINING</div>
                        <div>MEMBERSHIP</div>
                    </li>
                </ul>
            </div>
            <div><Link to="/casino">CASINO</Link>
                <ul className="menulist-box">
                    <li>
                        <div>HOTEL</div>
                        <div>PARADISE</div>
                        <div>OVERVIEW</div>
                        <div>객실</div>
                        <div>고객지원</div>
                    </li>
                    <li>
                        <div>HOTEL</div>
                        <div>ARD PARADISO</div>
                        <div>OVERVIEW</div>
                        <div>객실</div>
                        <div>고객지원</div>
                    </li>
                </ul>
            </div>  */}
            <div className="nav-bg"></div>     
        </nav>
    )
}



