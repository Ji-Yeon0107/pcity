import React from "react";
import styled from "styled-components";
import "./Main.css"
import { Popup } from "./Popup"
import { LeftMenu } from "./Menu"
import { RightMenu } from "./Menu"

export const Header:React.FC = () => {

    return(
        <header className="main-header">
            <RightMenu />
            <LeftMenu />
        </header>
    )
}



