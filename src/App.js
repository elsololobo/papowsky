import './App.css'
import Home from './pages/home/home'
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/shop'
import Header from './components/header/header'
import Login from './pages/login/login'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/slices/userSlice'

function App() {
  const dispatch = useDispatch()
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
        <Route exact={true} path={'/shop'} component={Shop} />
        <Route exact={true} path={'/sign-in'} component={Login} />
      </Switch>
    </div>
  )
}

export default App
