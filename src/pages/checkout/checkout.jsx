import React from 'react'
import './checkout.scss'
import { createStructuredSelector } from 'reselect'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/selectors/cart.selector'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

const structuredSelector = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})
const Checkout = () => {
  const { cartItems, total } = useSelector(structuredSelector)
  return (
    <div className={'checkout-page'}>
      <div className={'checkout-header'}>
        <div className={'header-block'}>
          <span>Product</span>
        </div>
        <div className={'header-block'}>
          <span>Description</span>
        </div>
        <div className={'header-block'}>
          <span>Quantity</span>
        </div>
        <div className={'header-block'}>
          <span>Price</span>
        </div>
        <div className={'header-block'}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={'total'}>
        <span>TOTAL: ${total}</span>
      </div>
      <div className={'test-warning'}>
        *Please use this test credit card number:
        <br />
        4242 4242 4242 4242
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  )
}

export default Checkout
