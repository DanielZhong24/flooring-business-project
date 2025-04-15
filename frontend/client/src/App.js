import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-around">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </div>
      </nav>

      <main className="container mx-auto py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="bg-gray-300 text-gray-700 py-4 text-center mt-8">
        <p>&copy; 2025 Your Flooring Business</p>
      </footer>
    </div>
  );
}

export default App;