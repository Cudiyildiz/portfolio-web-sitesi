import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;