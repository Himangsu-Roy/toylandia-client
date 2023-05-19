import React, { useState } from "react";

// const toys = [
//   {
//     id: 1,
//     seller: "John",
//     name: "Toy 1",
//     subCategory: "Educational",
//     price: 10,
//     quantity: 5,
//   },
//   {
//     id: 2,
//     seller: "Fane",
//     name: "Toy 2",
//     subCategory: "Science",
//     price: 20,
//     quantity: 3,
//   },
//   {
//     id: 3,
//     seller: "Yane",
//     name: "Toy 2",
//     subCategory: "Science",
//     price: 20,
//     quantity: 3,
//   },
// ];

const MyToys = () => {
  const [toys, setToys] = useState([
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
  ]); // State to store the user's toys

  // Function to handle toy update
  const handleUpdateToy = (toyId, updatedToyData) => {
    // Update the toy with the updated data in the toys state
    const updatedToys = toys.map((toy) => {
      if (toy.id === toyId) {
        return { ...toy, ...updatedToyData };
      }
      return toy;
    });
    setToys(updatedToys);
  };

  // Function to handle toy deletion
  const handleDeleteToy = (toyId) => {
    // Show a confirmation dialog and delete the toy if confirmed
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this toy?"
    );
    if (confirmDelete) {
      // Remove the toy from the toys state
      const updatedToys = toys.filter((toy) => toy.id !== toyId);
      setToys(updatedToys);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mt-8 mb-4">My Toys</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded my-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Available Quantity</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {toys.map((toy) => (
              <tr key={toy.id}>
                <td className="py-2 px-4 border-b">{toy.name}</td>
                <td className="py-2 px-4 border-b">${toy.price}</td>
                <td className="py-2 px-4 border-b">{toy.quantity}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                    onClick={() =>
                      handleUpdateToy(toy.id, {
                        /* Updated toy data */
                      })
                    }
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                    onClick={() => handleDeleteToy(toy.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div>
    //   <h1>My Toys</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Price</th>
    //         <th>Available Quantity</th>
    //         <th>Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {toys.map((toy) => (
    //         <tr key={toy.id}>
    //           <td>{toy.name}</td>
    //           <td>{toy.price}</td>
    //           <td>{toy.quantity}</td>
    //           <td>
    //             <button
    //               onClick={() =>
    //                 handleUpdateToy(toy.id, {
    //                   /* Updated toy data */
    //                 })
    //               }
    //             >
    //               Update
    //             </button>
    //             <button onClick={() => handleDeleteToy(toy.id)}>Delete</button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default MyToys;
