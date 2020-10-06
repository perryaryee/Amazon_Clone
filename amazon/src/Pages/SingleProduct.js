import React from 'react'
import { useStateValue } from '../Components/StateProvider';
import {useParams} from "react-router-dom";

const SingleProduct = ({id,image,rating,price,title}) => {
    //const {id} = useParams();

    const [{single_product},dispatch] = useStateValue();
    return (
       
        <div className="product">
        <div className="product__info">
          <p>{single_product.title}</p>
          <p className="product__price">
            <strong>$</strong>
            <strong>{single_product.price}</strong>
          </p>
          <div className="product__rating">
            {Array(single_product.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={single_product.image} alt="" />
  
        <button >Add To Basket</button>
      </div>
    )
}

export default SingleProduct;
