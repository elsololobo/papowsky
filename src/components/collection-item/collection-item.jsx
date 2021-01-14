import React from 'react'
import './collection-item.scss'
import CustomButton from '../custom-button/custom-button'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item
  const dispatch = useDispatch()
  return (
    <div className={'collection-item'}>
      <div
        className={'image'}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={'collection-footer'}>
        <span className={'name'}>{name}</span>
        <span className={'price'}>{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted={true}>
        Add to cart
      </CustomButton>
    </div>
  )
}
export default CollectionItem
