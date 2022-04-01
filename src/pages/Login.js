import React from "react";
import Logo from "../Image/logo.png";
import "./login.css";
import Fundo from "../Image/fundo-netflix-login.jpg"
import Fb from "../Image/fb.png";

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
                            <input type="email" placeholder="E-mail ou número de telefone"/>
                        </div>
                        <div className="login">
                            <input type="password" placeholder="Senha"/>
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
                        <div className="info-conect">
                            <img src={Fb} alt="Logo Netflix" />
                            <a href="">
                                Conectar com Facebook
                            </a>
                        </div>
                        <div className="info-sign">
                            <p>Novo por aqui?</p><a href="">Assine agora.</a>
                        </div>
                        <div className="info_finish">
                            <span>Esta página é protegida pelo Google reCAPTCHA 
                                para garantir que você não é um robô.
                            </span>
                            <a href="">Saiba mais.</a>
                        </div>

                    </div>
                </div>
            </section>
            <footer className="footerOne">

                <div className="rodape">
                    <p>Dúvidas? Ligue 0800-761-4631</p>

                    <div className="footer-item1">
                        <span>Perguntas frequentes</span>
                        <span>Centro de ajuda</span>
                        <span>Termos de uso</span>
                        <span>Privacidade</span>
                    </div>

                    <div className="footer-item2">
                        <span>Preferências de cookies</span>
                        <span>Informações corporativas</span>
                    </div>
                </div> 
            </footer>
       </div>
    );
}

export default login;