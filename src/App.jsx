import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Nopage from './pages/nopage/Nopage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/*' element={<Nopage></Nopage>}> </Route>
      </Routes>
    </Router>
  )
}

export default App
