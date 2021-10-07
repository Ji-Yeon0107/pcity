import React from "react";
import styled from "styled-components";
import "./Main.css"
import { Popup } from "./Popup"
import { LeftMenu } from "./Menu"
import { RightMenu } from "./Menu"

type HeaderProps = {
    user:any;
    handleLogout:any;
}

export const Header:React.FC<HeaderProps> = ({user,handleLogout}) => {

    return(
        <header className="main-header">
            <RightMenu 
            user={user} 
            handleLogout={handleLogout} />
            <LeftMenu />
        </header>
    )
}



