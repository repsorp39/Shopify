import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buy = () => {
   const [quantite, setQuantite] = useState(0);
   const [isEmpty, setEmpty] = useState(false);
   const navigate = useNavigate();
   return (
      <section className="get-product">
         <h5> Passez une commmande</h5>
         <div>
            <label htmlFor="qte">Quantité:</label>
            <input
               type="number"
               min="1"
               onChange={(e) => setQuantite(e.target.value)}
            />
            <button
               onClick={() => {
                  quantite > 0 ? navigate("/panier") : setEmpty(true);
               }}
            >
               Valider
            </button>
         </div>

         {isEmpty && <p className="error">Vous devez précisé une quantité</p>}
      </section>
   );
};

export default Buy;
