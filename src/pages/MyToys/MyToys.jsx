import React, { useState } from "react";

const MyToys = () => {
  const [toys, setToys] = useState([]); // State to store the user's toys

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
    <div>
      <h1>My Toys</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy.id}>
              <td>{toy.name}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <button
                  onClick={() =>
                    handleUpdateToy(toy.id, {
                      /* Updated toy data */
                    })
                  }
                >
                  Update
                </button>
                <button onClick={() => handleDeleteToy(toy.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
