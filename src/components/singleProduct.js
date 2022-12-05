import React from 'react'
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { cartState } from '../context/Context'
const SingleProduct = ({prod}) => {
  const {state:{cart},dispatch}=cartState();
  
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some(p=>p.id ===prod.id)?(

            <Button variant="danger" onClick={()=>dispatch({type:'REMOVE_TO_CART',payload:prod})}>Remove to Cart</Button>
          ):(

          <Button variant="primary" disabled={!prod.inStock} onClick={()=>dispatch({type:'ADD_TO_CART',payload:prod})}>
          {!prod.inStock ?"Out of Stock":"Add to Cart"}</Button>
          )}
            </Card.Body>
          </Card>



    </div>
  )
}

export default SingleProduct