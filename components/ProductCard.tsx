import React from 'react';

const ProductCard = ({ image, name, price }) => {
  const handleAddToCart = () => {
    alert(`${name} has been added to your cart.`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 mt-2">${price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-yellow-500 text-black mt-4 px-4 py-2 rounded-full hover:bg-yellow-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
