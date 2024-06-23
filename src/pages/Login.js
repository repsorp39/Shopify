import axios from "axios";
import React, { useState } from "react";
import "./../styles/form.scss";
import loader from "../assets/images/loader.gif";
import { useNavigate } from "react-router-dom";

const Login = ({ setPseudo, setAsLogin }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [usernameError, setUsernameError] = useState("");
   const [incorrectPassword, setPasswordIncorrect] = useState(false);
   const navigate = useNavigate(); /*Permet de faire des redirections  */
   const [isLoading, setLoading] = useState(false);

   /**Validation Form */
   async function handleSubmit(username, password) {
      if (username.trim() === "") {
         setUsernameError("Ce champ ne peut pas être laissé vide!");
         return;
      } else {
         setUsernameError("");
      }

      if (password === "") {
         setPasswordIncorrect("Vous devez entrer un mot de passe");
         return;
      } else {
         setPasswordIncorrect("");
      }

      /* Permet de vérifier si le chargement des données est achevé*/
      setLoading(true);

      //Envoi des infos du formulaire sur l'api
      await axios
         .post("https://fakestoreapi.com/auth/login", {
            username: username,
            password: password,
         })
         .then((res) => {
            /*Si un token est renvoyé , alors on déclare le user comme  connecté */
            if (res.data.token) {
               setAsLogin(true);
               setPseudo(username);
               setLoading(false);
               navigate("/"); /*Redirection vers l'acccueil */
            }
         })
         .catch(() => {
            setUsernameError(
               /*Sinon  on envoit un essage d'erreur  */
               "Utilisateur non retrouvé"
            );
            setLoading(false);
         });
   }

   return (
      <React.Fragment>
         <h1>
            Login
            {isLoading && (
               <span className="loadingState">
                  <img src={loader} alt="loading statement" />
               </span>
            )}
         </h1>
         <form>
            <div>
               <label htmlFor="username">Username</label>
               <input
                  type="text"
                  id="username"
                  placeholder="johnd"
                  onChange={(event) => setUsername(event.target.value)}
               />
               {usernameError && (
                  <p className="error-form">
                     <i className="bi bi-info-circle"></i> {usernameError}
                  </p>
               )}
            </div>
            <div>
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  placeholder="m38rmF$"
                  onChange={(event) => setPassword(event.target.value)}
               />
               {incorrectPassword && (
                  <p className="error-form">
                     <i className="bi bi-info-circle"></i>
                     {incorrectPassword}{" "}
                  </p>
               )}
            </div>
            <button
               type="submit"
               onClick={(event) => {
                  event.preventDefault();
                  handleSubmit(username, password);
               }}
            >
               Login
            </button>
         </form>
      </React.Fragment>
   );
};

export default Login;
