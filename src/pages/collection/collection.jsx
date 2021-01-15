import React from 'react'
import './collection.scss'
import { useSelector } from 'react-redux'
import { selectCollection } from '../../redux/selectors/shop.selector'
import CollectionItem from '../../components/collection-item/collection-item'

const Collection = ({ match }) => {
  const { title, items } = useSelector((state) =>
    selectCollection(match.params.collectionId)(state)
  )

  return (
    <div className={'collection-page'}>
      <h2 className={'title'}>{title}</h2>
      <div className={'items'}>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
export default Collection
