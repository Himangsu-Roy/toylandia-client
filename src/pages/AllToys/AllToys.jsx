import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ToyDetails from "../ToyDetails/ToyDetails";

const AllToys = () => {
  const toysData = useLoaderData();
  const { user, loading } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [toys, setToys] = useState(toysData);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(toys);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter toys based on search term
    const filteredToys = toysData.filter((toy) =>
      toy.name.toLowerCase().includes(value.toLowerCase())
    );
    setToys(filteredToys);
  };

  // const handleViewDetails = (_id) => {
  //   if (user) {
  //     navigate(`/toy/${_id}`);
  //   } else {
  //     // const options = {
  //     //   state: { from: location },
  //     //   replace: true,
  //     // };
  //     // console.log(navigate);
  //     navigate("/login");

  //   }

  //   if (loading) {
  //     return (
  //       <div className="flex justify-center items-center h-screen">
  //         <div className="relative">
  //           <div className="w-12 h-12 rounded-full absolute border-8 border-solid border-gray-200"></div>
  //           <div className="w-12 h-12 rounded-full animate-spin absolute border-8 border-solid border-purple-500 border-t-transparent"></div>
  //         </div>
  //       </div>
  //     );
  //   }
  // };

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

  

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1>All Toys</h1>

      <div className="my-4">
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
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {toys.map((toy) => (
              <tr key={toy.id}>
                <td className="md:py-3 py-6">{toy.sellerName || "N/A"}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>${toy.price}</td>
                <td>{toy.quantity}</td>
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

// import { useState } from "react";

// function AllToys() {
//   const [toys, setToys] = useState([
//     // Toys data
//     { seller: "himu", name: "minicar", subCategory: "car", price: "$3", quantity: 23 },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [visibleToys, setVisibleToys] = useState(20);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleLoadMore = () => {
//     setVisibleToys((prevVisibleToys) => prevVisibleToys + 20);
//   };

//   const filteredToys = toys.filter((toy) =>
//     toy.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-6">All Toys</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by Toy name"
//           value={searchTerm}
//           onChange={handleSearch}
//           className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
//         />
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr>
//               <th className="py-2">Seller</th>
//               <th className="py-2">Toy Name</th>
//               <th className="py-2">Sub-category</th>
//               <th className="py-2">Price</th>
//               <th className="py-2">Available Quantity</th>
//               <th className="py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredToys.slice(0, visibleToys).map((toy, index) => (
//               <tr key={index} className={`text-center ${index % 2 === 0 ? "bg-gray-100" : ""}`}>
//                 <td className="py-2">{toy.seller}</td>
//                 <td className="py-2">{toy.name}</td>
//                 <td className="py-2">{toy.subCategory}</td>
//                 <td className="py-2">{toy.price}</td>
//                 <td className="py-2">{toy.quantity}</td>
//                 <td className="py-2">
//                   <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {filteredToys.length > visibleToys && (
//         <div className="mt-4">
//           <button
//             onClick={handleLoadMore}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AllToys;
