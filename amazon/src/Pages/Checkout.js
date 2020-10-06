import React from "react";
import { useStateValue } from "../Components/StateProvider";
//import { useStateValue } from "../Components/StateProvider";
import Subtotal from "../Components/Subtotal";
import "../Pages/Checkout.css";
import CheckoutProduct from "../Components/CheckoutProduct";

const Checkout = () => {
  const [{ basket,user }, dispatch] = useStateValue();

  if (basket.length === 0) {
    return (
      <div>
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h1> {user?.email}Pls your Basket is Empty pls ADD some product to your cart</h1>
      </div>
    );
  } else {
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <h2 className="checkout__title"> <h4>Hello,{user?.email}</h4>Your Shopping Basket</h2>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    );
  }
};

export default Checkout;
