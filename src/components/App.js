import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Boutique from "../pages/Boutique";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Panier from "../pages/Panier";
import Header from "./Header";
import SingleProduct from "../pages/SingleProduct";

const App = () => {
   /*Récupération des infos utilisateur si préalablement connecté */
   const isOnline = JSON.parse(localStorage.getItem("login"));
   const setUsername = localStorage.getItem("pseudo");

   /*On définit l'état actuelle de connexion selon le contenu du local storage */
   const [isLogin, setAsLogin] = useState(isOnline ? true : false);
   const [pseudo, setPseudo] = useState(
      setUsername ? JSON.parse(setUsername) : ""
   );

   useEffect(() => {
      localStorage.setItem("login", JSON.stringify(isLogin));
      localStorage.setItem("pseudo", JSON.stringify(pseudo));
   }, [isLogin]);
   return (
      <React.Fragment>
         <BrowserRouter basename="/shopper">
            <Header
               isLogin={isLogin}
               setAsLogin={setAsLogin}
               pseudo={pseudo}
               setPseudo={setPseudo}
            />
            <Routes>
               <Route path="/" element={<Home isLogin={isLogin} />} />
               <Route
                  path="/login"
                  element={
                     <Login
                        isLogin={isLogin}
                        setAsLogin={setAsLogin}
                        setPseudo={setPseudo}
                     />
                  }
               />
               <Route path="/insc" element={<About isLogin={isLogin} />} />
               <Route path="panier" element={<Panier isLogin={isLogin} />} />
               <Route
                  path="boutique"
                  element={<Boutique isLogin={isLogin} />}
               />

               <Route
                  path="/boutique/:produitId"
                  element={<SingleProduct isLogin={isLogin} />}
               />

               <Route path="*" element={<Home isLogin={isLogin} />} />
            </Routes>
         </BrowserRouter>
      </React.Fragment>
   );
};

export default App;
