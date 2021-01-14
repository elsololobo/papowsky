import React from 'react'
import './checkout-Item.scss'
import { useDispatch } from 'react-redux'
import { addItem, clearItem, removeItem } from '../../redux/slices/cartSlice'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()
  return (
    <div className={'checkout-item'}>
      <div className={'image-container'}>
        <img alt={'item'} src={imageUrl} />
      </div>
      <span className={'name'}>{name}</span>
      <span className={'quantity'}>
        <div className={'arrow'} onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className={'value'}>{quantity}</span>
        <div className={'arrow'} onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className={'price'}>{price}</span>
      <span className={'remove'} onClick={() => dispatch(clearItem(cartItem))}>
        &#10005;
      </span>
    </div>
  )
}
export default CheckoutItem
