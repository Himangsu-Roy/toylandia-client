import React from 'react';

const Featured = () => {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Product image */}
              <div className="bg-gray-200 h-48 mb-4"></div>
              {/* Product name */}
              <h3 className="text-lg font-bold mb-2">Product 1</h3>
              {/* Product price */}
              <p className="text-gray-700 mb-2">$19.99</p>
              {/* Add to Cart button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Product image */}
              <div className="bg-gray-200 h-48 mb-4"></div>
              {/* Product name */}
              <h3 className="text-lg font-bold mb-2">Product 2</h3>
              {/* Product price */}
              <p className="text-gray-700 mb-2">$24.99</p>
              {/* Add to Cart button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Product image */}
              <div className="bg-gray-200 h-48 mb-4"></div>
              {/* Product name */}
              <h3 className="text-lg font-bold mb-2">Product 3</h3>
              {/* Product price */}
              <p className="text-gray-700 mb-2">$14.99</p>
              {/* Add to Cart button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Product image */}
              <div className="bg-gray-200 h-48 mb-4"></div>
              {/* Product name */}
              <h3 className="text-lg font-bold mb-2">Product 4</h3>
              {/* Product price */}
              <p className="text-gray-700 mb-2">$29.99</p>
              {/* Add to Cart button */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Featured;
