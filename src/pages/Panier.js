import React, { useEffect, useState } from "react";
import "../styles/panier.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const Panier = ({ isLogin }) => {
   const navigate = useNavigate();
   const [Cart, setCart] = useState([]);
   const [isDataLoading, setDataLoading] = useState(true);

   useEffect(() => {
      if (!isLogin) {
         navigate("/login");
      }
      async function getCart() {
         let purchase = [];
         await axios
            .get("https://fakestoreapi.com/carts/user/3")
            .then((res) => {
               purchase = res.data;
            })
            .catch((error) => console.log(error));
         let shopList = [];

         for (let i = 0; i < purchase.length; i++) {
            let date = purchase[i].date;
            let products = [];
            for (let c = 0; c < purchase[i].products.length; c++) {
               await axios
                  .get(
                     "https://fakestoreapi.com/products/" +
                        purchase[i].products[c].productId
                  )
                  .then((res) => {
                     products.push({
                        name: res.data.title,
                        price: res.data.price,
                        category: res.data.category,
                        qte: purchase[i].products[c].quantity,
                     });
                  })
                  .catch((error) => console.log(error));
            }

            shopList.push({
               date: date,
               produit: products,
            });
         }

         setCart(shopList);
         setDataLoading(false);
      }

      getCart();
   }, []);
   return isDataLoading ? (
      <Loader />
   ) : (
      <>
         <article className="panier container">
            <h1>Mes Achats</h1>

            <section>
               {Cart.map((purchase, index) => (
                  <Card key={index} purchase={purchase} />
               ))}
            </section>
         </article>
         <Footer />
      </>
   );
};

export default Panier;
