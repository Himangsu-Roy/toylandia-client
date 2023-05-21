import { useState } from "react";
import useTitle from "../../utils/useTitle";
import Swal from "sweetalert2";

function AddToy() {
  const [formData, setFormData] = useState({
    pictureURL: "",
    toyName: "",
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
    fetch("https://toy-landia-server.vercel.app/addatoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Data Added Successfully",
          });
        }
      });
  };

  useTitle("Add Toy");

  return (
    <div className="container mx-auto py-10 px-3">
      <h1 className="text-3xl font-bold mb-6">Add A Toy</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4"
      >
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="name">
            Toy Name
          </label>
          <input
            type="text"
            id="toyName"
            name="toyName"
            value={formData.toyName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="sellerEmail">
            Seller Email
          </label>
          <input
            required
            type="email"
            id="sellerEmail"
            name="sellerEmail"
            value={formData.sellerEmail}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>
        <div className="mb-6 col-span-full">
          <label className="block mb-2 font-bold" htmlFor="description">
            Detail description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#EE552A] text-white px-4 py-2 rounded-md col-span-full max-w-[15rem]"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
}

export default AddToy;
