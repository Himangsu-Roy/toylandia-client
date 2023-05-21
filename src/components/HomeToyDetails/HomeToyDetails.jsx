import { useLoaderData } from "react-router-dom";

const HomeToyDetails = () => {
  const toydetails = useLoaderData();

  const {
    description,
    pictureURL,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    subCategory,
    toyName,
    _id,
  } = toydetails;
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#EE552A] text-white px-6 py-4">
            <h1 className="text-2xl font-bold">{toyName}</h1>
            <p className="text-sm">Category: {subCategory}</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-bold">${price}</div>
              <div className="text-sm text-gray-500">In Stock: {quantity}</div>
            </div>
            <div className="mb-6">
              <img
                src={pictureURL}
                alt="Toy Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeToyDetails;
