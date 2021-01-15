import React from 'react'
import './collections-overview.scss'
import CollectionPreview from '../collection-preview/collection-preview'
import { selectCollectionsForPreview } from '../../redux/selectors/shop.selector'
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const structuredSelector = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

const CollectionsOverview = () => {
  const { collections } = useSelector(structuredSelector)

  return (
    <div className={'collections-overview'}>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}
export default CollectionsOverview
