import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct( {id, title, image, price, rating}) {
    
  const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
    }).format(price);

const [{basket} ,dispatch] = useStateValue();

const removeFromBasket = () =>{
  dispatch({
    type: "REMOVE_FROM_BASKET",
    id : id,
  });
}

  return (
    <div className='checkoutProduct'>
      <img className ="checkoutProduct__image" src={image} alt="" />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct_price'>
            <span>{formattedPrice}</span>
        </p>
        <div className='product_rating'>
            {Array(rating)
            .fill()
            .map((__) => (
                <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
