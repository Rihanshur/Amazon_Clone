import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {
    
    const [{},dispatch] = useStateValue();

    const addToBasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
    }).format(price);
  return (

    <div className='product'>
        <img src={image} alt="" />
        <div className='product_info'>
            <p>{title}</p>
            <div className='product_rating'>
                {Array(rating)
                .fill()
                .map((__) => (
                    <p>⭐</p>
                ))}
            </div>
            <p className='product_price'>
                <span>{formattedPrice}</span>
            </p>
        </div>
        <button onClick={addToBasket}>Add to basket</button>
        
    </div>
  )
}

export default Product
