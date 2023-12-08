import * as React from "react";
import "./Navbar.scss";
import { ReactComponent as RedditLogo } from "../../resources/images/redditlogo.svg";
import { ReactComponent as Reddit } from "../../resources/images/reddit.svg";
import { ReactComponent as Search } from "../../resources/images/search.svg";
import { ReactComponent as Expand } from "../../resources/images/expand.svg";
import { ReactComponent as User } from "../../resources/images/user.svg";

export interface NavbarProps {}

export default function Navbar(props: NavbarProps) {
    return (
        <div className="navbar">
            <div className="logo">
                <RedditLogo className="reddit-logo"/>
                <Reddit className="reddit"/>
            </div>
            <div className="search">
                <input type="text" placeholder="Reddit Search" className="searchBar"/>
            </div>
            <div className="user">
                <button className="auth login">
                    Login
                </button>
                <button className="auth register">
                    Register
                </button>

                <div className="user-info">
                    <img src={require("../../resources/images/user.png")} className="user-image" alt="user"/>
                    <img src={require("../../resources/images/expand.png")} className="expand" alt="expand"/>
                </div>
            </div>
        </div>
    )
}