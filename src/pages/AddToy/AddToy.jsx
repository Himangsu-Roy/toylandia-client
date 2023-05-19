import { useState } from "react";

function AddToy() {
  const [formData, setFormData] = useState({
    pictureURL: "",
    name: "",
    sellerName: "",
    sellerEmail: "",
    subCategory: "",
    price: "",
    rating: "",
    quantity: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Add A Toy</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="pictureURL">
            Picture URL of the toy
          </label>
          <input
            type="text"
            id="pictureURL"
            name="pictureURL"
            value={formData.pictureURL}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="sellerName">
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="sellerEmail">
            Seller Email
          </label>
          <input
            type="email"
            id="sellerEmail"
            name="sellerEmail"
            value={formData.sellerEmail}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="subCategory">
            Sub-category
          </label>
          <input
            type="text"
            id="subCategory"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="price">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="rating">
            Rating
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="quantity">
            Available quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="description">
            Detail description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
}

export default AddToy;

// import React, { useState } from "react";

// function AddToy() {
//   const [toyData, setToyData] = useState({
//     pictureUrl: "",
//     name: "",
//     sellerName: "",
//     sellerEmail: "",
//     subCategory: "",
//     price: "",
//     rating: "",
//     quantity: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setToyData({ ...toyData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(toyData);
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-5">Add A Toy</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="pictureUrl" className="block font-medium mb-1">
//             Picture URL:
//           </label>
//           <input
//             type="text"
//             name="pictureUrl"
//             id="pictureUrl"
//             value={toyData.pictureUrl}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded py-2 px-3"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="name" className="block font-medium mb-1">
//             Name:
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={toyData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded py-2 px-3"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="sellerName" className="block font-medium mb-1">
//             Seller Name:
//           </label>
//           <input
//             type="text"
//             name="sellerName"
//             id="sellerName"
//             value={toyData.sellerName}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded py-2 px-3"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="sellerEmail" className="block font-medium mb-1">
//             Seller Email:
//           </label>
//           <input
//             type="email"
//             name="sellerEmail"
//             id="sellerEmail"
//             value={toyData.sellerEmail}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded py-2 px-3"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="subCategory" className="block font-medium mb-1">
//             Sub-category:
//           </label>
//           <input
//             type="text"
//             name="subCategory"
//             id="subCategory"
//             value={toyData.subCategory}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded py-2 px-3"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="price" className="block font-medium mb-1">
//             Price:
//           </label>
//           <input
//             type="text"
//             name="price"
//             id="price"
//             value={toyData.price}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded py-2 px-3"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="rating" className="block font-medium mb-1">
//             Rating:
//           </label>
//           <input
//             type="text"
//             name="rating"
//             id="rating"
//             value={toyData.rating}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded py-2 px-3"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="quantity" className="block font-medium mb-1">
//             Available Quantity:
//           </label>
//           <input
//             type="text"
//             name="quantity"
//             id="quantity"
//             value={toyData.quantity}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded py-2 px-3"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block font-medium mb-1">
//             Detail Description:
//           </label>
//           <textarea
//             name="description"
//             id="description"
//             value={toyData.description}
//             onChange={handleChange}
//             className="border py-2 px-3 border-gray-300 rounded w-full"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold2 py-2 px-4 rounded"
//         >
//           Add Toy
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddToy;
