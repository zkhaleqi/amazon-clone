import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-MzEyZTkwMmMt-w3000._CB404724085_.jpg"
          className="home__image"
          alt=""
        ></img>

        <div className="home__row">
          <Product
            id="2343243"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71fV4qjDNiL._AC_SY879_.jpg"
            rating={5}
          ></Product>
          <Product
            id="235444"
            title="Kenwoord kMix Stand Mixer for 
            Baking, Stylish Kitchen Mixer with
            K-beater, Dough Hoot and Whisk, 5 Litre
            Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71fV4qjDNiL._AC_SY879_.jpg"
            rating={4}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            id="98324"
            title="Bebe Silicone Baby Teether Toys & Gum Massagers, 1 Hard & 1 Soft"
            price={11.97}
            image="https://images-na.ssl-images-amazon.com/images/I/616e-dR3DiL._SY355_.jpg"
            rating={4}
          ></Product>
          <Product
            id="984834"
            title="LG OLED55CXPUA Alexa eingebauter CX 55 Zoll 4K Smart OLED TV (2020) "
            price={1496.99}
            image="https://images-na.ssl-images-amazon.com/images/I/A1LDFBeKebL._AC_SX522_.jpg"
            rating={4}
          ></Product>
          <Product
            id="764663"
            title="Fitbit Versa 2 Gesundheits- und Fitness-Smartwatch mit Herzfrequenz, Musik"
            price={179.95}
            image="https://images-na.ssl-images-amazon.com/images/I/715obo1cz0L._AC_SL1500_.jpg"
            rating={4}
          ></Product>
          <Product
            id="646483"
            title="Blaulicht-blockierende Brille Computerspielbrille"
            price={16.98}
            image="https://images-na.ssl-images-amazon.com/images/I/71-eejsrVhL._AC_SY450_.jpg"
            rating={4}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            id="54343"
            title="LG OLED55CXPUA Alexa eingebauter CX 55 Zoll 4K Smart OLED TV"
            price={1496.99}
            image="https://images-na.ssl-images-amazon.com/images/I/A1LDFBeKebL._AC_SX522_.jpg"
            rating={4}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
