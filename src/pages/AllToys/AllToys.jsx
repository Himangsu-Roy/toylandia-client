import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../utils/useTitle";
import ToyDetails from "../ToyDetails/ToyDetails";

const AllToys = () => {
  const toysData = useLoaderData();
  const { user, loading } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [toys, setToys] = useState(toysData);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter toys based on search term
    const filteredToys = toysData.filter((toy) =>
      toy.toyName.toLowerCase().includes(value.toLowerCase())
    );
    setToys(filteredToys);
  };

  const handleViewDetails = () => {
    if (user) {
      setIsModalOpen(true);
    } else {
      Swal.fire({
        title: "Error!",
        text: "You have to log in first to view details",
        icon: "error",
        confirmButtonText: "Cool",
      });
      navigate("/login");
    }
  };

  useTitle("All Toys");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-9">
      <div className="my-4 mb-8 text-center">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {toys.map((toy) => (
              <tr key={toy?._id}>
                <td className="md:py-3 py-6">{toy?.sellerName || "N/A"}</td>
                <td>{toy?.toyName}</td>
                <td>{toy?.subCategory}</td>
                <td>${toy?.price}</td>
                <td>{toy?.quantity}</td>
                <td>
                  {/* <Link to={`/toy/${toy._id}`}>
                    <button
                      onClick={() => handleViewDetails(toy._id)}
                      className="px-3 py-2 text-white bg-blue-500 rounded-md "
                    >
                      View Details
                    </button>
                  </Link> */}
                  {/* The button to open modal */}
                  <ToyDetails toy={toy} key={toy._id}></ToyDetails>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;