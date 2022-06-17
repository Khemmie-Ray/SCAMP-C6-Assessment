import React from "react"
import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import menu from "../images/icon-menu.svg"
import avatar from "../images/image-avatar.png"

export default function Nav() {
    return (
        <div className="nav-container">
            <img className="mobileNav" src={menu} alt="" />
            <nav>
            <img src={logo} alt=""  className="icon"/>
            <ul className="nav-lists">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
            <div className="navImg">
            <img src={cart} alt="" />
            <img src={avatar} alt="" className="avatarImg" />
            </div>
        </div>
    )
}