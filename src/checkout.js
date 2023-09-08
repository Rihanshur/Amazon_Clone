import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img15/4th/sept/unrechero/8thslot/Tws_Tallhero_3000x1200._CB596103422_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h1>Your Shopping cart is empty</h1>
            <p>
              You have no items in your basket.To buy one or more
              items,click"Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="checkout__title">Your Shopping Cart</h1>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div> 
      {basket.length > 0 && (
        <div className="checkout__right">
            <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
