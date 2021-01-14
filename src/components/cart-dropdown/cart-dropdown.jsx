import React from 'react'
import './cart-deopdown.scss'
import CustomButton from '../custom-button/custom-button'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/selectors/cart.selector'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/slices/cartSlice'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <div className={'cart-dropdown'}>
      <div className={'cart-items'}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={'empty-message'}>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        inverted={true}
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}
export default CartDropdown
