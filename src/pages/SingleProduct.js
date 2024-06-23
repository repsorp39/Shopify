import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import "../styles/produit.scss";
import Buy from "../components/Buy";
import Loader from "../components/Loader";

const SingleProduct = ({ isLogin }) => {
   const { produitId } = useParams();
   const [product, setProduct] = useState({});
   const navigate = useNavigate();
   const [isDataLoading, setLoading] = useState(true);
   useEffect(() => {
      if (!isLogin) {
         navigate("/login");
      }

      function fetchData(id) {
         axios
            .get("https://fakestoreapi.com/products/" + id)
            .then((res) => {
               setProduct(res.data);
               res.data ? setLoading(false) : setLoading(true);
            })
            .catch((error) => console.log(error));
      }

      fetchData(produitId);
   }, []);
   let tab = [];
   !isDataLoading
      ? (tab = new Array(Math.floor(product.rating.rate)).fill(0))
      : console.log("Loading Error");
   return isDataLoading ? (
      <Loader />
   ) : (
      <>
         <article className="produit container-lg">
            <BackButton />
            <section>
               <div>
                  <h3>{product.title}</h3>
                  <p>
                     <img src={product.image} alt="" />
                  </p>
               </div>

               <div>
                  <p>
                     <span>Description</span> {product.description}
                  </p>
                  <p>
                     <span>Catégorie </span> {product.category}
                  </p>
                  <p>
                     <span>Price</span> {product.price}
                     <i className="i bi-currency-euro"></i>
                  </p>
                  <p>
                     <span>Rating</span>
                     {tab.map(() => (
                        <i className="bi bi-star-fill"></i>
                     ))}
                  </p>
               </div>
            </section>
         </article>
         <Buy />
      </>
   );
};

export default SingleProduct;
