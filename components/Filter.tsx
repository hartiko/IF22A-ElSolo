import React from 'react';

// Define the type for the props
interface FilterProps {
  onFilterChange: (filterType: string, value: string) => void; // Function type for handling the filter change
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h3 className="text-xl font-semibold">Filter by:</h3>
      <div className="mt-4 space-y-3">
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            onChange={(e) => onFilterChange('category', e.target.value)}
            className="w-full p-2 mt-1 border rounded-md"
          >
            <option value="">All Categories</option>
            <option value="Sneakers">Sneakers</option>
            <option value="Boots">Boots</option>
            <option value="Sandals">Sandals</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Price</label>
          <select
            onChange={(e) => onFilterChange('price', e.target.value)}
            className="w-full p-2 mt-1 border rounded-md"
          >
            <option value="">All Prices</option>
            <option value="low">Under $100</option>
            <option value="medium">$100 - $200</option>
            <option value="high">Over $200</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
