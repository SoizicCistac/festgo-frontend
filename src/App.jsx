import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from './components/Layout'
import Festivals from './pages/Festivals'
import AddStand from './pages/AddStand'
import AddFestival from './pages/AddFestival'
import Stand from './pages/Stand'
import Festival from './pages/Festival'
import EditFestival from './pages/EditFestival'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/festivals" element={<Festivals/>}/>
          <Route path='/festivals/:id' element={<Festival/>}/>
          <Route path='/festivals/create' element={<AddFestival/>}/>
          <Route path='/festivals/:id/edit' element={<EditFestival/>}/>
          <Route path='/stand/:id' element={<Stand/>}/>
          <Route path='/stand/create' element={<AddStand/>}/>
        </Route>
       
      </Routes>
    </div>
  )
}

export default App
