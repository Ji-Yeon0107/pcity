import React, { useState, useEffect } from "react";
import "./components/Main.css";
import "./components/reset.css";
import fire from "./fire";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Main } from "./components/Main";
import { Booking } from "./components/Booking";
import { NotFound } from "./components/NotFound"; 
import { Header } from "./components/Header"; 
import { Login } from "./components/Login"; 
import { Hero } from "./components/Hero"; 
// import { EntTabBooking } from "/components/EntTabBooking";



function App() {

  // 로그인auth
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs=()=>{
      setEmail('');
      setPassword('');
  }
  const clearErrors =() => {
      setEmailError('');
      setPasswordError('');
  }
  const handleLogin =() => {
      clearErrors();
      fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err:any)=> {
          switch(err.code) {
              case "auth/invalid-email":
              case "auth/user-disabled":
              case "auth/user-not-found":
                  setEmailError(err.message);
                  break;
              case"auth/wrong-password":
                  setPasswordError(err.message);
                  break;
          }
      })
  };
  const handleSignup =() => {
      clearErrors();
      fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err:any)=> {
          switch(err.code) {
              case "auth/email-already-in-use":
              case "auth/invalid-email":
                  setEmailError(err.message);
                  break;
              case"auth/weak-password":
                  setPasswordError(err.message);
                  break;
          }
      })
  }

  const handleLogout = () => {
      fire.auth().signOut();
  };

  const authListener = ()=> {
      fire.auth().onAuthStateChanged((user:any)=>{
          if(user){
              clearInputs();
              setUser(user);
          }else{
              setUser("")
          }
      })
  }

  useEffect(()=>{
      authListener();
  },[])


  

      // 게스트 수
      const [adultNum, setAdultNum] = useState(1);
      const [kidNum, setKidNum] = useState(0);
      const [guestNum, setGuestNum] = useState(1);

      // 날짜관련
      const today = new Date()
      const [dateRange, setDateRange] = useState([new Date(), new Date(today.setDate(today.getDate() + 1))]);
      const [startDate, endDate] = dateRange;


      console.log(user)


  return (
    <Router>
        <div className="wrapper">

          <Header 
            handleLogout={handleLogout}
            user={user}
          />
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
              {user?(
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
                ):(
                <Login 
                  email={email} 
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                />
                )
              }
              <Route path="/login">
                <Login 
                  email={email} 
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                />
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
               
               {/* <Route path="/booking">
                 <EntTabBooking 
                    adultNum={adultNum} 
                    kidNum={kidNum} 
                    guestNum={guestNum}
                    setAdultNum={setAdultNum} 
                    setKidNum={setKidNum} 
                    setGuestNum={setGuestNum}
                  />
              </Route> */}
              <Route component={NotFound}></Route>
            </Switch>
          </main>
        </div>
      </Router>
  );
}

export default App;
