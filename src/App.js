import './App.css'
import Home from './pages/home/home'
import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/shop'
import Header from './components/header/header'
import Login from './pages/login/login'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './redux/slices/userSlice'
import { selectCurrentUser } from './redux/selectors/user.selector'
import Checkout from './pages/checkout/checkout'

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }))
        })
      }
      dispatch(setCurrentUser(null))
    })
    return () => unsubscribeFromAuth()
  }, [])
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path={'/'} component={Home} />
        <Route path={'/shop'} component={Shop} />
        <Route exact={true} path={'/checkout'} component={Checkout} />
        <Route
          exact={true}
          path={'/sign-in'}
          render={() => (currentUser ? <Redirect to={'/'} /> : <Login />)}
        />
      </Switch>
    </div>
  )
}

export default App
