import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

const Header = () => {
  const { currentUser, hidden } = useSelector((state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
  }))
  return (
    <div className={'header'}>
      <Link className={'logo-container'} to={'/'}>
        <Logo className={'logo'} />
      </Link>
      <div className={'options'}>
        <Link className={'option'} to={'/shop'}>
          SHOP
        </Link>
        <Link className={'option'} to={'/shop'}>
          CONTACT
        </Link>
        {currentUser ? (
          <div className={'option'} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className={'option'} to={'/sign-in'}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}
export default Header
