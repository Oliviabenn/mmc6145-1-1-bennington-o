import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import "./styles/globalStyle.css"
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 

      <Footer />
    </div>
  )
}

export default App