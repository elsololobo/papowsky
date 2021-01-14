import React from 'react'
import './cart-deopdown.scss'
import CustomButton from '../custom-button/custom-button'
import { useSelector } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/selectors/cart.selector'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  return (
    <div className={'cart-dropdown'}>
      <div className={'cart-items'}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton inverted={true}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
export default CartDropdown
