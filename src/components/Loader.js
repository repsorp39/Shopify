import React from "react";
import loader from "../assets/images/dataLoading.gif";
import "../styles/loader.scss";

const Loader = () => {
   return (
      <section className="dataLoader">
         <p>
            <img src={loader} alt="Loader State" />
         </p>
      </section>
   );
};

export default Loader;
