import { useLoaderData } from "react-router-dom";

const HomeToyDetails = () => {
    const toydetails = useLoaderData();
    console.log(toydetails)
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-500 text-white px-6 py-4">
            <h1 className="text-2xl font-bold">Toy Name</h1>
            <p className="text-sm">Category: Sub-category</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-bold">$19.99</div>
              <div className="text-sm text-gray-500">In Stock: 10</div>
            </div>
            <div className="mb-6">
              <img
                src="toy-image.jpg"
                alt="Toy Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              commodo elit. Duis placerat dui at lacus vehicula, in posuere
              lectus vestibulum. Quisque commodo vestibulum orci, id iaculis
              metus dignissim nec.
            </p>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
                Add to Cart
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeToyDetails;

