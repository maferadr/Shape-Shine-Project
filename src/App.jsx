//Implementing Outlet middleware from react-router-dom to allow the routes browsing
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar';


function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App;
