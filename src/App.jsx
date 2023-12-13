import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/order' element={<ProtectedRoutes>
            <Order></Order>
          </ProtectedRoutes>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/dashboard' element={<ProtectedRoutesForAdmin>
            <Dashboard></Dashboard>
          </ProtectedRoutesForAdmin>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/addproduct' element={<ProtectedRoutesForAdmin>
            <AddProduct></AddProduct>
          </ProtectedRoutesForAdmin>}></Route>
          <Route path='/updateproduct' element={<ProtectedRoutesForAdmin>
            <UpdateProduct></UpdateProduct>
          </ProtectedRoutesForAdmin>}></Route>
          <Route path='/productinfo/:id' element={<ProductInfo></ProductInfo>}></Route>
          <Route path='/*' element={<Nopage></Nopage>}> </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>

  )
}

export default App

//user.............
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

//admin========
export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'sabbir123@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}
