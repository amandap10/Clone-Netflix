import React from "react";
import Img from "./Image/user.jpg";
import Logo from "./Image/logo.png"
import "./index.css";

function header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="Netflix" />
                </a>
            </div>
            <div className="user">
               <img src={Img} alt="Usuário" />
            </div>

        </header>
    );
}

export default header;