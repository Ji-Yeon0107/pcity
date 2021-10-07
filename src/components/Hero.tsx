import React from 'react';
import {useHistory} from 'react-router-dom';
import "./style/login.css"

type HeroProps ={
    handleLogout:any;
}
export const Hero:React.FC<HeroProps> =({handleLogout}) => {

    const history= useHistory();

    return(
        <section className="hero">
            
            <nav>
                
                <h2>환영합니다!</h2>
                <div>예약을 완료해보세요</div>
                <button className="toBooking hero-button" onClick={ ()=>{
                    history.push({pathname: '/booking'})}}>상품 보러 가기
                </button>
                
            </nav>
        </section>
    )
}