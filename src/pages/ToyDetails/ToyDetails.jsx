import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";


function ToyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const isAuthenticated = true; // Replace with your actual authentication logic

  const handleViewDetails = () => {
    if (isAuthenticated) {
      setIsModalOpen(true);
    } else {
      alert("You have to log in first to view details");
      navigate("/login");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(-1);
  };

  return (
    <div>
      <h1>Toy Details Page</h1>
      <button onClick={handleViewDetails}>View Details</button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          {/* Display the toy details in the modal */}
          <h1>Toy Details Page</h1>

          <h2>Toy Details</h2>
          <p>Toy ID: {id}</p>
          {/* Include other details like picture, name, seller name, etc. */}
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}
    </div>
  );
}

export default ToyDetails;
