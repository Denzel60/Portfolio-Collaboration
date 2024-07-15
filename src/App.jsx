import './App.css'
import Header from './components/Header.jsx/Header'
import Home from './pages/Home/Home'
import Blogs from './pages/Blog/Blogs'
import Work from './pages/Work/Work'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Work' element={<Work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
