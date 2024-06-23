import React from "react";

const Card = ({ purchase }) => {
   return (
      <div className="cart">
         <h4>{purchase.date.slice(0, 10)}</h4>
         {purchase.produit.map((prod) => (
            <ol>
               <li>
                  <ul>
                     <li>
                        <p>
                           <span>Produit:</span>
                           {prod.name}
                        </p>
                     </li>
                     <li>
                        <p>
                           <span>Catégorie:</span>
                           {prod.category}
                        </p>
                     </li>
                     <li>
                        <p>
                           <span>Quantité:</span>
                           {prod.qte}
                        </p>
                     </li>
                     <li>
                        <p>
                           <span className="total">Total:</span>
                           {prod.price * prod.qte}
                           <i className="i bi-currency-euro"></i>
                        </p>
                     </li>
                  </ul>
               </li>
            </ol>
         ))}
      </div>
   );
};

export default Card;
