import React from "react";
import "../Components/Home.css";
import Product from "../Components/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__image"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            image="https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
            price={123.9}           
             rating={6}
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
          />
          <Product
             id={2}
            image="https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg"
            price={123.9}
            rating={3}
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
          />
          <Product
            id={2}
            image="https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg"
            price={23.7}
            rating={3}
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
          />
          <Product
            id={89}
            image="https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg"
            price={123.9}
            rating={3}
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
          />
        </div>
        <div className="home__row">
          <Product
            id={11}
            image="https://m.media-amazon.com/images/I/51IY2jXTlRL._AC_SY200_.jpg"
            price="123.9"
            rating={5}
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
          />
          <Product
            id={15}
            image="https://m.media-amazon.com/images/I/31AZvhYLyeL._AC_SY200_.jpg"
            price={123.90}
            rating={3}
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
          />
          <Product
            id={12}
            image="https://m.media-amazon.com/images/I/31AZvhYLyeL._AC_SY200_.jpg"
            price={123.90}
            rating={3}
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
          />
        </div>

        <div className="home__row">
          <Product
            id={101}
            image="https://m.media-amazon.com/images/I/41+tceVy64L._AC_SY200_.jpg"
            price={123.90}
            rating={3}
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
          />
          <Product
          id={100}
          image="https://m.media-amazon.com/images/I/41+tceVy64L._AC_SY200_.jpg"
          price={123.90}
          rating={3}
          title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
        />
        <Product
        id={90}
        image="https://m.media-amazon.com/images/I/41+tceVy64L._AC_SY200_.jpg"
        price={123.90}
        rating={3}
        title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
      />
      <Product
      id={900}
      image="https://m.media-amazon.com/images/I/41+tceVy64L._AC_SY200_.jpg"
      price={123.90}
      rating={3}
      title="Kenwood kMix Stand Mixer for Baking,Stylish Kitcheen Mixer with K-beater,Dough Hooj and Whisk, 5 Little "
    />
        </div>

        <div className="home__row"></div>
      </div>
    </div>
  );
};

export default Home;
