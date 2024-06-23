import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/boutique.scss";
import boutiqueLogo from "../assets/images/btq3.jpg";
import axios from "axios";
import Footer from "../components/Footer";
import Product from "../components/Product";

const Boutique = ({ isLogin }) => {
   const navigate = useNavigate();
   /*On initialise le montant initial du budget de l'acheteur à 700$ */
   const [rangeValue, setRangeValue] = useState(700);
   const [isFiltered, setFilter] = useState(false);
   const [products, setProducts] = useState([]);
   const [allCategorie, getAllCategorie] = useState([]);
   const [currentCategorie, setCategorie] = useState([]);
   useEffect(() => {
      if (!isLogin) {
         navigate("/login");
      }

      /*Récupération des produits disponibles */
      axios
         .get("https://fakestoreapi.com/products")
         .then((res) => setProducts(res.data))
         .catch((error) => console.log(error));

      /*Récupération des catégories  disponibles */
      axios
         .get("https://fakestoreapi.com/products/categories")
         .then((res) => {
            getAllCategorie(res.data);
         })
         .catch((error) => console.log(error));
   }, []);

   return (
      <React.Fragment>
         <main className="boutique container">
            <h1>
               <img src={boutiqueLogo} alt="boutique logo" />
            </h1>

            <section className="apply-filter">
               <div>
                  <span>Votre Budget:</span>
                  <input
                     type="range"
                     min="10"
                     max="1000"
                     defaultValue={rangeValue}
                     onChange={(e) => {
                        setRangeValue(e.target.value);
                        setFilter(true);
                     }}
                  />
               </div>
               {isFiltered && (
                  <span className="budget">
                     {rangeValue}
                     <i className="i bi-currency-euro"></i>
                  </span>
               )}
               {isFiltered && (
                  <div>
                     <button
                        onClick={(e) => {
                           setFilter(false);
                           setRangeValue(1000);
                        }}
                     >
                        Annuler le filtre
                     </button>
                  </div>
               )}
            </section>

            <section className="categorie">
               <div className="category">
                  <ul>
                     <span>
                        Catégorie <i className="bi bi-chevron-down"></i>
                     </span>
                     <div className="single-cat">
                        {allCategorie.map((categorie, index) => (
                           <label key={index} htmlFor={categorie}>
                              <li>
                                 <input
                                    id={categorie}
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    onChange={(e) => {
                                       /**Chaque fois q1e box est cochée , on accumule les  valeurs cochée dans un tableau */
                                       if (e.target.checked) {
                                          setCategorie(
                                             currentCategorie.concat([
                                                e.target.id,
                                             ])
                                          );
                                       } else {
                                          setCategorie(
                                             currentCategorie.filter(
                                                (cat) => cat != e.target.id
                                             ) //dans le cas ou la box est décochée , on applique un filtre pour retiré la valeur cochée
                                          );
                                       }
                                    }}
                                 />
                                 {categorie}
                              </li>
                           </label>
                        ))}
                     </div>
                  </ul>
               </div>
            </section>
            <section className="products">
               <h2>ACTUELLEMENT DISPONIBLE...</h2>
               <ul>
                  {products
                     .filter((product) =>
                        currentCategorie.length >= 1
                           ? currentCategorie.includes(product.category)
                           : allCategorie.includes(product.category)
                     )
                     .filter((product) => product.price <= rangeValue)
                     .sort((a, b) => a.price - b.price)
                     .map((product) => (
                        <Product key={product.id} product={product} />
                     ))}
               </ul>
            </section>
         </main>
         <Footer />
      </React.Fragment>
   );
};

export default Boutique;
