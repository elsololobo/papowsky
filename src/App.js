import './App.css'
import Home from './pages/home/home'
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/shop'
import Header from './components/header/header'
import Login from './pages/login/login'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() })
        })
      }
      setCurrentUser(userAuth)
    })
    return () => unsubscribeFromAuth()
  }, [])
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/shop'} component={Shop} />
        <Route exact={true} path={'/sign-in'} component={Login} />
      </Switch>
    </div>
  )
}

export default App
