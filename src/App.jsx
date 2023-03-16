import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Layout from './components/Layout'
import Festivals from './pages/Festivals'
import AddStand from './pages/stand/AddStand'
import AddFestival from './pages/festival/AddFestival'
import Stand from './pages/stand/Stand'
import EditStand from './pages/stand/EditStand'
import Festival from './pages/festival/Festival'
import EditFestival from './pages/festival/EditFestival'
import ProtectedRoute from './pages/navigation/ProtectedRoute'
import AddProduct from './pages/stand/AddProduct'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route element={<Layout/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/festivals" element={<Festivals/>}/>
          <Route path='/festivals/:id' element={<Festival/>}/>
          <Route path='/festivals/:id/stand/:idstand' element={<Stand/>}/>

          <Route element={<ProtectedRoute/>}>
            <Route path='/festivals/create' element={<AddFestival/>}/>
            <Route path='/festivals/:id/edit' element={<EditFestival/>}/>
            <Route path='/festivals/:id/stand/create' element={<AddStand/>}/>
            <Route path='/festivals/:id/stand/:idstand/edit' element={<EditStand/>}/>
            <Route path='/festivals/:id/stand/:idstand/addproduct' element={<AddProduct/>}/>
          </Route>

        </Route>
       
      </Routes>
    </div>
  )
}

export default App
