import React from 'react'
import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../redux/slices/cartSlice'
import { selectCartItemsCount } from '../../redux/selectors/cart.selector'

const ItemsCount = () => {
  const itemsCount = useSelector(selectCartItemsCount, shallowEqual)
  return <span className={'item-count'}>{itemsCount}</span>
}

const CartIcon = () => {
  const dispatch = useDispatch()
  return (
    <div className={'cart-icon'} onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className={'shopping-icon'} />
      <ItemsCount />
    </div>
  )
}
export default CartIcon
