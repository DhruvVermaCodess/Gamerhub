import React from 'react'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App