// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Default from './layaut/Default'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import Dashboard from './layaut/Dashboard'
import AddProduct from './pages/AddProduct'
import ListItems from './pages/ListItems'
import Error from './pages/Error'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Default/>}>
          <Route index element={<Home/>}/>
          <Route path='collection' element={<Collection/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='products/:id' element={<ProductDetails/>}/>
          <Route path='dashboard' element={<Dashboard/>}>
            <Route index element={<AddProduct/>}/>
            <Route path='/dashboard/add' element={<AddProduct/>}/>
            <Route path='/dashboard/list' element={<ListItems/>}/>
          </Route>
        </Route>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
