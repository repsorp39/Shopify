import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
   const navigate = useNavigate();
   return (
      <div className="mb-3">
         <button
            onClick={(e) => {
               navigate(-1);
            }}
         >
            <i className="bi bi-arrow-left">Back</i>
         </button>
      </div>
   );
};

export default BackButton;
