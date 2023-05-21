import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import UpdateToy from "../UpdateToy/UpdateToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://toy-landia-server.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleUpdateToy = (id) => {
    <UpdateToy id={id}></UpdateToy>;
  };

  // Function to handle toy deletion
  const handleDeleteToy = (toyId) => {
    Swal.fire({
      title: "Are you sure you want to delete this toy?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-landia-server.vercel.app/toys/${toyId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remainningToys = toys.filter((toy) => toy._id !== toyId);
              setToys(remainningToys);
            }
          });
      }
    });
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
              <tr key={toy._id}>
                <td className="py-2 px-4 border-b">{toy.toyName}</td>
                <td className="py-2 px-4 border-b">${toy.price}</td>
                <td className="py-2 px-4 border-b">{toy.quantity}</td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/update/${toy._id}`}>
                    <button
                      className="mr-2 bg-black opacity-80 hover:bg-black hover:opacity-70 text-white py-1 px-2 rounded"
                      onClick={() => handleUpdateToy(toy._id)}
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                    onClick={() => handleDeleteToy(toy._id)}
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
  );
};

export default MyToys;
