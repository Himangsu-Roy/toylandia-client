import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const toysData = [
  
  // Sample toy data, replace with actual toy data from your data source
  {
    id: 1,
    seller: "John",
    name: "Toy 1",
    subCategory: "Educational",
    price: 10,
    quantity: 5,
  },
  {
    id: 2,
    seller: "Fane",
    name: "Toy 2",
    subCategory: "Science",
    price: 20,
    quantity: 3,
  },
  {
    id: 3,
    seller: "Yane",
    name: "Toy 2",
    subCategory: "Science",
    price: 20,
    quantity: 3,
  },
  {
    id: 4,
    seller: "Kane",
    name: "Toy 2",
    subCategory: "Science",
    price: 20,
    quantity: 3,
  },
  {
    id: 5,
    seller: "Dane",
    name: "Toy 2",
    subCategory: "Science",
    price: 20,
    quantity: 3,
  },
  {
    id: 6,
    seller: "Jane",
    name: "Toy 2",
    subCategory: "Science",
    price: 20,
    quantity: 3,
  },
  {
    id: 7,
    seller: "Mane",
    name: "Toy 2",
    subCategory: "Science",
    price: 20,
    quantity: 3,
  },
  {
    id: 8,
    seller: "Gane",
    name: "Toy 2",
    subCategory: "Science",
    price: 20,
    quantity: 3,
  },
  // Add more toy objects as needed
];

const AllToys = () => {
  const {user} = useContext(AuthContext)
  const [searchTerm, setSearchTerm] = useState("");
  const [toys, setToys] = useState(toysData);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter toys based on search term
    const filteredToys = toysData.filter((toy) =>
      toy.name.toLowerCase().includes(value.toLowerCase())
    );
    setToys(filteredToys);
  };

  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/login");
      console.log(location)
    } else {

      navigate(`/toy/${id}`);
    }
  };

  return (
    <div>
      <h1>All Toys</h1>

      <div className="my-4">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

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
        <tbody>
          {toys.map((toy) => (
            <tr key={toy.id}>
              <td>{toy.seller || "N/A"}</td>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>${toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <button
                  onClick={() => handleViewDetails(toy.id)}
                  className="px-2 py-1 text-white bg-blue-500 rounded-md"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
