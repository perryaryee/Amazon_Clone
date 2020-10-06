import React from "react";
import "../Components/Product.css";
import { useStateValue } from "./StateProvider";
import {useParams,Link} from "react-router-dom";


const Product = ({ title, image, price, rating,id}) => {
  
 //const {id} = useParams();
 // you can coose to use the useParams when there is no passed id in the props
 // so with that you have to use Optional Chaning ("?") to be used to attach the useStateValue Value
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer when the button is clicked
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const handleSingleProduct = () => {

    dispatch({
      type: "SET_SINGLE_PRODUCT",
      single_product:{
        id,
        title,
        image,
        price,
        rating
      }
    });
  }
  //https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg
  //https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg
  //https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg
  //https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg
  return (
    <Link to={`/product/${id}`}>
    <div className="product" onClick={handleSingleProduct}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add To Basket</button>
    </div>
    </Link>
  );
};

export default Product;
