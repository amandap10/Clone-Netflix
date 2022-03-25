import React from "react";
import Logo from "../Image/logo.png";
import "./login.css";
import Fundo from "../Image/fundo-netflix-login.jpg"

function login() {
    return (
       <div className="imagem-fundo">
           <img src={Fundo} alt="Imagem de fundo" />
            <header className="logo-initial">
                <div className="logo__netflix">
                    <a href="/">
                        <img src={Logo} alt="Logo Netflix" />
                    </a>
                </div>
            </header>
            <section>
                <div className="interface__login">
                    <h1>Entrar</h1>
                    <form >
                        <div className="login">
                            <input type="email" />
                        </div>
                        <div className="login">
                            <input type="password" />
                        </div>
                        <div className="btn1">
                            <button className="btn" type="button">Entrar</button>
                        </div>
                        <div className="label-login">
                            <label type="checkbox">Lembre-se de mim</label>
                            <span>Precisa de ajuda?</span>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <div className="rodape">
                    <p>Duvidas? Ligue 0800-761-4631</p>
                    <ul>
                        perguntas frequentes centro de ajuda termos de uso privacidade
                        Preferência de cookies Informações corporativas
                    </ul>
                </div>
            </footer>
       </div>
    );
}

export default login;