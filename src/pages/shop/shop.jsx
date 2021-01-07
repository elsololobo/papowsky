import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import SHOP_DATA from './shop.data'

const Shop = () => {
  const collections = SHOP_DATA
  return (
    <div className={'shop-page'}>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}

export default Shop
