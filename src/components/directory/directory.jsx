import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './directory.scss'
import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/selectors/directory.selector'
import { createStructuredSelector } from 'reselect'

const structuredSelector = createStructuredSelector({
  sections: selectDirectorySections,
})

const Directory = () => {
  const { sections } = useSelector(structuredSelector)
  return (
    <div className={'directory-menu'}>
      {sections.map((section) => {
        return <MenuItem key={section.id} {...section} />
      })}
    </div>
  )
}
export default Directory
