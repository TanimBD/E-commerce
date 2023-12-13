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
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='/updateproduct' element={<UpdateProduct></UpdateProduct>}></Route>
          <Route path='/productinfo/:id' element={<ProductInfo></ProductInfo>}></Route>
          <Route path='/*' element={<Nopage></Nopage>}> </Route>
        </Routes>
      </Router>
    </MyState>

  )
}

export default App
