
import React, { useState } from "react";
import HorizontalScroll from 'react-scroll-horizontal'
import offersData from "../data/offers.json"
import "./Main.css";
import { MainBackground } from "./MainBackground"

export const ScrollBox:React.FC = () => {

    const scrollParent = {
      width:"66%",
      marginLeft:"34%",
      overflow:"hidden",
    }

    const scrollItems = { 
      opacity:1,
      width:"100%", 
      height:"240px",
      marginTop:"250px",
      background:"rgba(0,0,0,0.5)",
      paddingLeft:"30px",
      paddingRight:"30px",
      paddingTop:"10px",
    }
    const scrollItem   = { 
      width: "280px", 
      height: "240px", 
      color:"rgba(255,255,255,1)",
      marginRight:"90px",
      paddingTop:"20px",
      paddingBottom:"25px",
      paddingLeft:"38px",
      paddingRight:"38px",
      fontWeight:700,
    }
    
    const [offers, setoffers] = useState(offersData)

    return(
        <React.Fragment>
          <MainBackground />
          <div style={scrollParent}>
            <HorizontalScroll
              className="scrollItems"
              pageLock      = { true }
              reverseScroll = { true }
              style         = { scrollItems }
              // config        = {{ stiffness: int, damping: int }}
              // className     = { string }
              // animValues    = { int }
          >
            {
              offers.map((offer) => {
                return (
                  <div
                    key={offer.id} 
                    style={scrollItem} 
                    onMouseEnter={()=>{
                      const select = document.querySelector('.bg') as HTMLImageElement;

                      const targetEl = document.querySelector('.bg-box') as HTMLElement;
                      fadeOut(targetEl);
                      select.src=`./images/main${offer.id}.jpg`;

                      // 같은메뉴에 마우스를 올렸을 때
                      // if(Number(select.classList.item(2)) !== offer.id) {
                      //   const targetEl = document.querySelector('.bg-box') as HTMLElement;
                      //   fadeOut(targetEl);
                      // }
                      // select.className = 'bg';
                      // select.src=`./images/offer${offer.id}.jpg`;
                      // select.classList.add(offer.id.toString())
                    } }
                  >
                    <div className="offer-box">
                      <p className="offer-name">{offer.name}</p>
                      <p className="offer-desc">{offer.desc}</p>
                    </div>
                  </div>
                )
              })
            }
            
          </HorizontalScroll>

          <div className="scroll-icon">
            <img src="./images/scroll_h.png" alt="scroll" />
          </div>
        </div>

        
      </React.Fragment>
    )
}



let paused = false;

// function fadeIn(target:HTMLElement) {
//   var level:number|undefined = 0;
//   var inTimer:any = null;
//   if(!paused) {
//   inTimer = setInterval(()=>{
//     level = fadeInAction(target, level, inTimer);
//   }, 50)
//   }
// }
// function fadeInAction(target:HTMLElement, level:number|undefined, inTimer:any) {
//   level = Number(level) + 0.01;
//   changeOpacity(target, level.toString());
//   if(level>1) {
//     clearInterval(inTimer);
//     return level
//   }
// }

// background fade out 


function fadeOut(target:HTMLElement) {

  let test = document.querySelector('.bg-box-init') as HTMLElement;
  test.style.display='none';
  let level:number|undefined = 0.5
  let outTimer:any = null;
  if(!paused) {
  outTimer = setInterval(()=>{
    level = fadeOutAction(target,level,outTimer);
  },50)
  }
}

function fadeOutAction(target:HTMLElement, level:number|undefined, outTimer:any) {
  level = Number(level) - 0.07;
  changeOpacity(target, level.toString());
  // 함수 실행 중에 마우스를 옮겨서 다시 함수가 시작될 때 초기화
  if(level<= 1) {
    paused = true;

    if(level<0) {
      clearInterval(outTimer);
      paused = false;
    }
  }
  // 밝기가 0이 되면 함수 실행을 멈춘다
  
  return level
}

function changeOpacity(target:HTMLElement, level:string) {
  target.style.opacity = level;
  target.style.filter = `alpha(opacity=${parseInt(level)*100})`
}