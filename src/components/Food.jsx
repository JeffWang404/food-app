import { useState } from 'react';
import { data } from '../data/data.js';
import FilterButton from './FilterButton';

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter Type burgers, pizza, ...
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  // Filter by Price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div>
        {/* Filter Type */}
        <div className="flex flex-col lg:flex-row justify-between">
          <p className=" font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <FilterButton onClick={() => setFoods(data)}>All</FilterButton>
            <FilterButton onClick={() => filterType('burger')}>
              Burgers
            </FilterButton>
            <FilterButton onClick={() => filterType('pizza')}>
              Pizza
            </FilterButton>
            <FilterButton onClick={() => filterType('salad')}>
              Salads
            </FilterButton>
            <FilterButton onClick={() => filterType('chicken')}>
              Chicken
            </FilterButton>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className=" font-bold text-gray-700">Fitler Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <FilterButton onClick={() => filterPrice('$')}>$</FilterButton>
            <FilterButton onClick={() => filterPrice('$$')}>$$</FilterButton>
            <FilterButton onClick={() => filterPrice('$$$')}>$$$</FilterButton>
            <FilterButton onClick={() => filterPrice('$$$$')}>
              $$$$
            </FilterButton>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
