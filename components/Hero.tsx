import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-blue-500 text-white h-80 flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Your Perfect Pair</h1>
        <p className="text-lg mb-6">Browse our latest shoe collection and find your style.</p>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
