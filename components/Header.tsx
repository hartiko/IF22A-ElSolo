import React, { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ShoeStore</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/catalog" className="hover:text-yellow-500">Catalog</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </nav>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 bg-gray-700 rounded-lg text-white"
        />
      </div>
    </header>
  );
};

export default Header;
