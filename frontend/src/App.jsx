import React from 'react'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/products' element={<ProductListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App