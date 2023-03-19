import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Pizza from './pages/Pizza'
import Carrito from './pages/Carrito'
import NotFound from './pages/NotFound'

export default function App() {
  return(
    <>
      <Header/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Pizza/>} path='/pizza/:id'/>
        <Route element={<Carrito/>} path='/carrito'/>
        <Route element={<NotFound/>} path='*'/>
      </Routes>
      <Footer/>
    </>
  )
}
