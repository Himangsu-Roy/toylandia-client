import React from 'react';
import { useParams } from 'react-router-dom';

const HomeToyDetails = () => {
  const { id } = useParams();

  // Fetch the toy details based on the id from your data source
  const toy = {}; // Replace with your actual logic to fetch the toy details

  return (
    <div>
      <h1>Toy Details</h1>
      <p>Toy ID: {id}</p>
      {/* Display other details of the toy */}
    </div>
  );
};

export default HomeToyDetails;
