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
                            <input type="checkbox" />
                            <label>Lembre-se de mim</label>
                            <span>Precisa de ajuda?</span>
                        </div>
                    </form>
                    
                    <div className="informations">
                        <div>
                            <a href="">Conectar com Facebook</a>
                        </div>
                        <div>
                            <p>Novo por aqui?</p><span>Assine agora.</span>
                        </div>

                    </div>
                </div>
            </section>
            <footer className="footerOne">
                <div className="rodape">
                    <p>Duvidas? Ligue 0800-761-4631</p>
                </div>
            </footer>
       </div>
    );
}

export default login;