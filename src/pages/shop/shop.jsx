import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview'
import { Route } from 'react-router-dom'
import Collection from '../collection/collection'

const Shop = ({ match }) => {
  return (
    <div className={'shop-page'}>
      <Route
        exact={true}
        path={`${match.path}`}
        component={CollectionsOverview}
      />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
}

export default Shop
