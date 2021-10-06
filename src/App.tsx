import React, { useState, useEffect } from "react";
import "./components/Main.css";
import "./components/reset.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Main } from "./components/Main";
import { Booking } from "./components/Booking";
import { NotFound } from "./components/NotFound"; 
import { Header } from "./components/Header"; 
// import { EntTabBooking } from "/components/EntTabBooking";


function App() {
      // 게스트 수
      const [adultNum, setAdultNum] = useState(1);
      const [kidNum, setKidNum] = useState(0);
      const [guestNum, setGuestNum] = useState(1);

      // 날짜관련
      const today = new Date()
      const [dateRange, setDateRange] = useState([new Date(), new Date(today.setDate(today.getDate() + 1))]);
      const [startDate, endDate] = dateRange;

  return (
    <Router>
        <div className="wrapper">

          <Header/>
          <main>
            <Switch>
              <Route exact path="/">
                <Main
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
              </Route>
              <Route path="/booking">
                <Booking 
                  adultNum={adultNum}
                  kidNum={kidNum}
                  guestNum={guestNum}
                  setAdultNum={setAdultNum}
                  setKidNum={setKidNum}
                  setGuestNum={setGuestNum}
                  setDateRange={setDateRange}
                  startDate={startDate}
                  endDate={endDate}
                  today={today}  
                          />
              </Route>
              <Route path="/booking">
                {/* <EntTabBooking 
                    adultNum={adultNum} 
                    kidNum={kidNum} 
                    guestNum={guestNum}
                    setAdultNum={setAdultNum} 
                    setKidNum={setKidNum} 
                    setGuestNum={setGuestNum}
                  /> */}
              </Route>
              <Route component={NotFound}></Route>
            </Switch>
          </main>
        </div>
      </Router>
  );
}

export default App;
