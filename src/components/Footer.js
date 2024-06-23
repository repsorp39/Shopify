import React from "react";
import "../styles/footer.scss";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
   return (
      <footer>
         <div>
            <img src={logo} alt="logo shopper " />
         </div>

         <ul>
            <h5>Features</h5>
            <li>Bidule</li>
            <li>Exemple , ipsum.</li>
            <li>Essai</li>
         </ul>

         <ul>
            <h5>Pricing</h5>
            <li>Lorem ipsum.</li>
            <li>Lorem</li>
            <li>Essai</li>
         </ul>

         <ul>
            <h5>Contacts</h5>
            <li>+229 904315299</li>
            <li>
               <a href="mailto:repsorpwinner@gmail.com">Mail Us</a>
            </li>
            <li>Cotonou ,Bénin</li>
         </ul>

         <ul>
            <h5>Social Network</h5>
            <li className="d-flex m-3">
               <p>
                  <i className="bi bi-facebook"></i>
               </p>
               <p>
                  <i className="bi bi-twitter"></i>
               </p>
               <p>
                  <i className="bi bi-pinterest"></i>
               </p>
            </li>
         </ul>
      </footer>
   );
};

export default Footer;
