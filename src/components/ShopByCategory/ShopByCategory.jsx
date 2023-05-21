import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await fetch("http://localhost:5000/alltoys");
      const data = await response.json();
      setCategories(groupToysByCategory(data));
    } catch (error) {
      console.error("Failed to fetch toys:", error);
    }
  };

  const groupToysByCategory = (toys) => {
    const groupedCategories = {};
    toys.forEach((toy) => {
      const category = toy.SubCategory;
      if (!groupedCategories[category]) {
        groupedCategories[category] = [];
      }

      groupedCategories[category].push(toy);
    });
    return groupedCategories;
  };

  const visibleCategories = Object.keys(categories).slice(0, 3);

  const handleViewDetails = (_id) => {
    if (!user) {
      Swal.fire({
        title: "Error!",
        text: "You have to log in first to view details",
        icon: "error",
        confirmButtonText: "Cool",
      });
      //  navigate("/login");
      // return (
      // <Navigate to="/login" state={{ from: location }} replace></Navigate>
      // );

      const options = {
        state: { from: location },
        replace: true,
      };

      console.log(navigate);
      navigate("/login", options);
    } else {
      navigate(`/hometoydetails/${_id}`);
    }
  };

  return (
    <Tabs className="max-w-3xl mx-auto">
      <TabList className="flex space-x-4 mb-6">
        {visibleCategories.map((category) => (
          <Tab
            key={category}
            className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            {category}
          </Tab>
        ))}
      </TabList>

      {visibleCategories.map((category) => (
        <TabPanel key={category}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {categories[category].slice(0, 2).map((toy) => (
              <div
                className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col justify-between"
                key={toy._id}
              >
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{toy.toyName}</h3>
                <p className="text-gray-600 mb-2">${toy.Price}</p>
                <div className="flex items-center mb-2">
                  <span className="mr-1 text-yellow-400">&#9733;</span>
                  <span className="text-gray-600">{toy.Rating}</span>
                </div>
                <button
                  onClick={() => handleViewDetails(toy._id)}
                  className="bg-indigo-500 text-white rounded-full px-4 py-2 mt-4"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          {categories[category].length === 0 && (
            <p className="text-center">No toys available in this category.</p>
          )}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ShopByCategory;
