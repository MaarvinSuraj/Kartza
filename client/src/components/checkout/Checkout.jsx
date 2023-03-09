import React from 'react'
import { useSelector } from 'react-redux'
import classes from './checkout.module.css'

const Checkout = () => {
  const {products} = useSelector((state) => state.cart)

  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Your order is placed</h2>
        <p>You'll be notified when it's ready</p>
        <span>Total Price: Rs.{totalPrice}</span>
      </div>
    </div>
  )
}

export default Checkout