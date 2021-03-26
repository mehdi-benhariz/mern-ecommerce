import React from 'react'
const ProductCard = () => {
  return (
    <div class="w-screen flex justify-center items-center">
      <div class="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
          <div class="prod-title">
            <p class="text-2xl uppercase text-gray-900 font-bold">Puma Shoes</p>
            <p class="uppercase text-sm text-gray-400">
              The best shoes in the marketplace
            </p>
          </div>
          <div class="prod-img">
            <img
              src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
              class="w-full object-cover object-center"
              alt="a product"
            />
          </div>
          <div class="prod-info grid gap-10">
            
            <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p class="font-bold text-xl">65 $</p>
              <a href="/product/:pId" >
              <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                See More
              </button>
              </a>
         
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductCard;
