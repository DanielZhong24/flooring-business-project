import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className=" bg-red-600 w-full h-fit">
        <p className='text-center text-white'>Call us at xxx-xxx-xxxx for detail price!</p>
      </div>
      <div className='bg-gray-400 w-full h-auto'>
        <div className='p-3 block'>
        <div></div>
        <form class="max-w-md mx-auto">   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Mockups, Logos..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
          </div>
          </form>
        </div>
      </div>
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-around">
          <Link to="/" className="hover:text-gray-300 hover:underline hover:underline-offset-[20px] hover:bg-gray-900">Home</Link>
          <Link to="/about" className="hover:text-gray-300 hover:underline hover:underline-offset-[20px] hover:bg-gray-900">About</Link>
          <Link to="/contact" className="hover:text-gray-300 hover:underline hover:underline-offset-[20px] hover:bg-gray-900">Contact</Link>
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