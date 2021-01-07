import './App.css'
import Home from './pages/home/home'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Shop from './pages/shop/shop'
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/shop'} component={Shop} />
      </Switch>
    </div>
  )
}

export default App
