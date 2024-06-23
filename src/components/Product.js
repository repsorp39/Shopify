import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
   const navigate = useNavigate();
   let rateScore = [];
   /*rateScore  nous permet de savoir combien d'itérations .map doit faire , c'est à dire le nombre d'étoiles que le produit a */
   /**Math .floor pour convertir cette valeur en entier. On créé donc un tableau dont la longueur représente le nb d'étoiles du produit et on la remplit pour pouvoir faire des itérations */
   rateScore = new Array(Math.floor(product.rating.rate)).fill("0");

   return (
      <li
         onClick={() => {
            navigate("/boutique/" + product.id);
         }}
      >
         <p className="w-5">
            <img src={product.image} alt={product.title} />
         </p>
         <p>
            <span>Category:</span> {product.category}
         </p>
         <p>
            <span>Price:</span> {product.price}
            <i className="i bi-currency-euro"></i>
         </p>
         <p>
            <span>Rating:</span>
            {rateScore.map((product, index) => (
               <i key={index} className="bi bi-star-fill"></i>
            ))}
         </p>
      </li>
   );
};

export default Product;
