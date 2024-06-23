import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/home.scss";
import img1 from "../assets/images/shop.jpg";
import img2 from "../assets/images/shop1.jpg";
import img3 from "../assets/images/shop2.jpg";
import img4 from "../assets/images/shop6.avif";

const Home = ({ isLogin }) => {
   const navigate = useNavigate();
   useEffect(() => {
      if (!isLogin) {
         navigate("/login");
      }
   }, []);
   return (
      <React.Fragment>
         <main className="homePage container">
            <h1>
               All Your Favorite Is On <span>SHOPIFY! </span>
            </h1>
            <p className="home-intro">
               <img src={img4} alt="" />
            </p>

            <article>
               <h2>Nos services</h2>

               <section>
                  <p>
                     <span className="title">1.Produit de qualité</span>
                     <img src={img1} alt="femme faisant du shopping" />
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Perferendis, aut deleniti facilis alias ullam odio sint
                     aspernatur? Doloribus odio voluptate voluptas quos
                     consequuntur, maxime, natus eveniet reprehenderit sequi at
                     velit quisquam corrupti! Maiores quo et sapiente aliquid
                     maxime voluptate dignissimos laboriosam, autem sint totam
                     molestiae veritatis beatae id asperiores assumenda
                     aspernatur inventore, officia corrupti reprehenderit nemo
                     recusandae magna justify-content: space-between; m, rerum
                     accusamus? Vitae eaque et alias, ex animi dolorem aliquid
                     consequuntur similique cumque architecto facilis magnam
                     quis possimus ipsam fugit ad! Corrupti quod recusandae, ad
                     debitis quibusdam consequuntur? Facere quisquam minima
                     doloremque libero a quia odit animi non, aperiam dolorum,
                     explicabo vel?Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Cupiditate ipsam quis totam natus eum
                     assumenda quo quidem suscipit maiores nesciunt pariatur
                  </p>
               </section>
               <section>
                  <p>
                     <span className="title">2.Service de qualité</span>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Perferendis, aut deleniti facilis alias ullam odio sint
                     aspernatur? Doloribus odio voluptate voluptas quos
                     consequuntur, maxime, natus eveniet reprehenderit sequi at
                     velit quisquam corrupti! Maiores quo et sapiente aliquid
                     maxime voluptate dignissimos laboriosam, autem sint totam
                     molestiae veritatis beatae id asperiores assumenda d!
                     Corrupti quod recusandae, ad debitis quibusdam
                     consequuntur? Facere quisquam minima doloremque libero a
                     quia odit animi non, aperiam dolorum, explicabo vel?Lorem
                     ipsum dolor, sit amet consectetur adipisicing elit.
                     Reiciendis error officia eaque! Omnis deserunt magni ipsam
                     error aspernatur obcaecati quia sunt rem a, culpa
                     laboriosam voluptatum nobis doloremque amet, voluptate odit
                     reprehenderit rerum. Dolorem vitae consectetur cumque totam
                     qui ea eveniet neque voluptate, quisquam corporis et
                     architecto atque omnis sit!
                  </p>
                  <p>
                     <img src={img2} alt="femme faisant du shopping" />
                  </p>
               </section>
               <section>
                  <p>
                     <span className="title">3.Bidule de qualité</span>
                     <img src={img3} alt="femme faisant du shopping" />
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Perferendis, aut deleniti facilis alias ullam odio sint
                     aspernatur? Doloribus odio voluptate voluptas quos
                     aspernatur inventore, officia corrupti reprehenderit nemo
                     recusandae magnam, rerum accusamus? Vitae eaque et alias,
                     ex animi dolorem aliquid consequuntur similique cumque
                     architecto facilis magnam quis possimus ipsam fugit ad!
                     Corrupti quod recusandae, ad debitis quibusdam
                     consequuntur? Facere quisquam minima doloremque libero a
                     quia odit animi non, aperiam dolorum, explicabo vel?Lorem
                     ipsum dolor sit amet consectetur adipisicing elit.
                     Similique aperiam dolorem vitae temporibus, quisquam
                     molestiae at architecto vel distinctio dolores nesciunt
                     veniam? Obcaecati deleniti iure quod minima eum architecto
                     odit animi eius recusandae sequi? Quis molestiae nesciunt
                     saepe dolorem praesentium nemo illum commodi accusamus,
                     iste aperiam obcaecati a vitae in.
                  </p>
               </section>
            </article>
         </main>
         <Footer />
      </React.Fragment>
   );
};

export default Home;
