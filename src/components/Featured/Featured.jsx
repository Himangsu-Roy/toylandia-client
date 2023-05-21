import React from "react";

const Featured = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Product image */}
            <div className="bg-gray-200 h-48 mb-4">
              <img
                className="w-full h-full"
                src="https://m.media-amazon.com/images/I/71oEqv1b28L._AC_UL600_FMwebp_QL65_.jpg"
                alt=""
              />
            </div>
            {/* Product name */}
            <h3 className="text-lg font-bold mb-2">
              Jada Toys Knight Rider K.I.T.T. 1982 Pontiac Firebird DIE-CAST Car
            </h3>
            {/* Product price */}
            <p className="text-gray-700 mb-2">$19.99</p>
            {/* Add to Cart button */}
            <button className="bg-[#EE552A] hover:bg-[#c1401d] text-white py-2 px-4 rounded-full">
              Add to Cart
            </button>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Product image */}
            <div className="bg-gray-200 h-48 mb-4">
              <img
                className="w-full h-full"
                src="https://m.media-amazon.com/images/I/71rZdAmLYGL._AC_UL600_FMwebp_QL65_.jpg"
                alt=""
              />
            </div>
            {/* Product name */}
            <h3 className="text-lg font-bold mb-2">
              ARRMA 1/7 Felony 6S BLX Street Bash All-Road Muscle Car
            </h3>
            {/* Product price */}
            <p className="text-gray-700 mb-2">$24.99</p>
            {/* Add to Cart button */}
            <button className="bg-[#EE552A] hover:bg-[#c1401d] text-white py-2 px-4 rounded-full">
              Add to Cart
            </button>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Product image */}
            <div className="bg-gray-200 h-48 mb-4">
              <img
                className="w-full h-full"
                src="https://m.media-amazon.com/images/I/81TMrt4YawL._AC_UL600_FMwebp_QL65_.jpg"
                alt=""
              />
            </div>
            {/* Product name */}
            <h3 className="text-lg font-bold mb-2">
              LEGO 42110 Technic Land Rover Defender Off Road
            </h3>
            {/* Product price */}
            <p className="text-gray-700 mb-2">$14.99</p>
            {/* Add to Cart button */}
            <button className="bg-[#EE552A] hover:bg-[#c1401d] text-white py-2 px-4 rounded-full">
              Add to Cart
            </button>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Product image */}
            <div className="bg-gray-200 h-48 mb-4">
              <img
                className="w-full h-full"
                src="https://m.media-amazon.com/images/I/91RwT8tIWoL._AC_UL600_FMwebp_QL65_.jpg"
                alt=""
              />
            </div>
            {/* Product name */}
            <h3 className="text-lg font-bold mb-2">
              LEGO Technic Fast & Furious Dom's
            </h3>
            {/* Product price */}
            <p className="text-gray-700 mb-2">$29.99</p>
            {/* Add to Cart button */}
            <button className="bg-[#EE552A] hover:bg-[#c1401d] text-white py-2 px-4 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
