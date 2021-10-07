import React, {useState, useEffect} from "react";
import styled from "styled-components";
import "./style/login.css"
import {Hero} from "./Hero"

type LoginProps = {
    email:any,
    setEmail:any,
    password:any,
    setPassword:any,
    emailError:any,
    passwordError:any,
    handleLogin:any,
    handleSignup:any,
    hasAccount:any,
    setHasAccount:any,
    
}

export const Login:React.FC<LoginProps> = (
    {email,setEmail,password,emailError,passwordError,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount
    }) => {

        useEffect(()=>{
            const header = document.querySelector('header') as HTMLElement;
            header.className='sub-header'
        },[])
    return(
        <section className="login">
            <div className="loginContainer">
                <label>이메일 아이디</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>비밀번호</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount?(
                        <>
                            <button className="hero-button" onClick={handleLogin}>로그인하기</button>
                            <p>아이디가 없으십니까? <span onClick={()=> setHasAccount(!hasAccount)}>지금 가입하고 혜택을 누려보세요</span></p>
                        </>
                    ) : (
                        <>
                            <button className="hero-button" onClick={handleSignup}>가입하기</button>
                            <p>아이디가 있으신가요? <span onClick={()=>{
                                setHasAccount(!hasAccount)
                            }}>로그인 하세요</span></p>
                        </>
                    )
                    
                    }
                </div>

            </div>
        </section>
        // <div>
        //     <div>
        //         <h1>로그인</h1>
        //         <p>파라디아스 시티에 오신 것을 환영합니다.</p>
        //         <p>로그인을 하시고 더 편리하게 이용하세요.</p>
        //     </div>
        //     <div>
        //         <div>
        //             <div>로그인</div>
        //             <input type="text" placeholder="이메일" />
        //             <input type="text" placeholder="비밀번호"  />
        //             <button>로그인</button>
        //         </div>
        //         <div>
        //             <p>아직 회원이 아니신가요?</p>
        //             <p>회원이 되시면 멤버십 혜택을 받으실 수 있습니다!</p>
        //         </div>
        //     </div>
        // </div>
    )
}
