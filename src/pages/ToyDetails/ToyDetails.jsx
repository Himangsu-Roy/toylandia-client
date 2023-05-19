import React, { useState } from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";



function ToyDetails() {
    const {user} = useContext(AuthContext)
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);

  

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
