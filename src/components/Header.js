import React, { useState } from "react";
import "../styles/header.scss";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Header = ({ isLogin, setAsLogin, pseudo, setPseudo }) => {
   const [isClicked, setClicked] = useState(false);
   return (
      <>
         <div className="toggler-btn">
            <strong>
               <div>
                  <img src={logo} alt="logo du site shopper" />
               </div>
            </strong>

            <button
               onClick={() => {
                  isClicked ? setClicked(false) : setClicked(true);
               }}
            >
               {isClicked ? (
                  <i class="bi bi-x-lg"></i>
               ) : (
                  <i class="bi bi-list"></i>
               )}
            </button>
         </div>
         <header
            className={isClicked ? "" : "hide-it"}
            onClick={(e) => setClicked(false)}
         >
            <div>
               <img src={logo} alt="logo du site shopper" />
            </div>

            {isLogin && (
               <p className="welcome">
                  Bienvenue <span> {pseudo} !</span>
               </p>
            )}
            <nav>
               <ul>
                  <li>
                     <NavLink
                        to="/"
                        className={(link) =>
                           link.isActive ? "link activeLink" : "link "
                        }
                     >
                        Accueil
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        to="/boutique"
                        className={(link) =>
                           link.isActive ? "link activeLink" : " link "
                        }
                     >
                        Boutique
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/panier"
                        className={(link) =>
                           link.isActive ? "link activeLink" : "link "
                        }
                     >
                        Panier
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/insc"
                        className={(link) =>
                           link.isActive ? "link activeLink" : " link "
                        }
                     >
                        À propos
                     </NavLink>
                  </li>
                  <li>
                     {!isLogin ? (
                        <NavLink to="login">
                           <button className="login">
                              Connexion<i className="bi bi-person ms-1 "></i>
                           </button>
                        </NavLink>
                     ) : (
                        <button
                           className="logout"
                           onClick={(e) => {
                              setAsLogin(false);
                              setPseudo("");
                              window.location.reload();
                           }}
                        >
                           Déconnexion
                           <i className="bi bi-person-slash ms-1"></i>
                        </button>
                     )}
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
};

export default Header;
