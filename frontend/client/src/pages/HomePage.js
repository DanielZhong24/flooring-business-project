import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <header className="bg-blue-500 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to Our Flooring Business</h1>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <section className="mb-8">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4">Our Services</h2>
          <p className="text-gray-700 leading-relaxed">
            We offer a wide range of flooring services including installation, repair, and maintenance.
          </p>
          <ul className="list-disc list-inside mt-4 text-blue-600">
            <li>Hardwood Flooring</li>
            <li>Laminate Flooring</li>
            <li>Tile Flooring</li>
            <li>Carpet Installation</li>
          </ul>
        </section>
 
      </main>
    </div>
  );
}

export default HomePage;