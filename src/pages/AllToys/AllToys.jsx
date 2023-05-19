import { useState } from "react";

function AllToys() {
  const [toys, setToys] = useState([
    // Toys data
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [visibleToys, setVisibleToys] = useState(20);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLoadMore = () => {
    setVisibleToys((prevVisibleToys) => prevVisibleToys + 20);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">All Toys</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Toy name"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">Seller</th>
              <th className="py-2">Toy Name</th>
              <th className="py-2">Sub-category</th>
              <th className="py-2">Price</th>
              <th className="py-2">Available Quantity</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.slice(0, visibleToys).map((toy, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="py-2">{toy.seller}</td>
                <td className="py-2">{toy.name}</td>
                <td className="py-2">{toy.subCategory}</td>
                <td className="py-2">{toy.price}</td>
                <td className="py-2">{toy.quantity}</td>
                <td className="py-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredToys.length > visibleToys && (
        <div className="mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Load More
          </button>
        </div>
      )}
    </div>

    // <div className="overflow-x-auto">
    //   <table className="table table-zebra w-full">
    //     {/* head */}
    //     <thead>
    //       <tr>
    //         <th></th>
    //         <th>Name</th>
    //         <th>Job</th>
    //         <th>Favorite Color</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {/* row 1 */}
    //       <tr>
    //         <th>1</th>
    //         <td>Cy Ganderton</td>
    //         <td>Quality Control Specialist</td>
    //         <td>Blue</td>
    //       </tr>
    //       {/* row 2 */}
    //       <tr>
    //         <th>2</th>
    //         <td>Hart Hagerty</td>
    //         <td>Desktop Support Technician</td>
    //         <td>Purple</td>
    //       </tr>
    //       {/* row 3 */}
    //       <tr>
    //         <th>3</th>
    //         <td>Brice Swyre</td>
    //         <td>Tax Accountant</td>
    //         <td>Red</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default AllToys;
