import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import about from './pages/about'
import contact from './pages/contact'
import '.style.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}