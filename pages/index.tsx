import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const Home = () => {
  const [filters, setFilters] = useState({ category: '', price: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const products = [
    { image: 'https://via.placeholder.com/300', name: 'Sneaker 1', price: 99.99, category: 'Sneakers' },
    { image: 'https://via.placeholder.com/300', name: 'Sneaker 2', price: 129.99, category: 'Sneakers' },
    { image: 'https://via.placeholder.com/300', name: 'Boots 1', price: 159.99, category: 'Boots' },
    { image: 'https://via.placeholder.com/300', name: 'Sneaker 3', price: 89.99, category: 'Sneakers' },
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const filteredProducts = currentProducts.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.price === 'low' && product.price >= 100) return false;
    if (filters.price === 'medium' && (product.price < 100 || product.price > 200)) return false;
    if (filters.price === 'high' && product.price <= 200) return false;
    return true;
  });

  return (
    <div>
      <Header />
      <Hero />
      <div className="container mx-auto py-8">
        <Filter onFilterChange={onFilterChange} />
        <h2 className="text-2xl font-semibold mb-6">Our Latest Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={idx} image={product.image} name={product.name} price={product.price} />
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
