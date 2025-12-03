/**
 * وبسایت شرکتی
 * طراحی و توسعه: محمدرضا رضائی
 * وبسایت: melalweb.com
 */

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

