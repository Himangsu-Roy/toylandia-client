import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function ShopByCategory() {
  const categories = [
    {
      name: "Math Toys",
      subCategories: ["Subcategory 1", "Subcategory 2"],
    },
    {
      name: "Language Toys",
      subCategories: ["Subcategory 3", "Subcategory 4"],
    },
    {
      name: "Engineering Toys",
      subCategories: ["Subcategory 5", "Subcategory 6"],
    },
    {
      name: "Science Toys",
      subCategories: ["Subcategory 7", "Subcategory 8"],
    },
  ];

  const toys = [
    {
      picture: "toy1.jpg",
      name: "Toy 1",
      price: "$9.99",
      rating: "4.5",
      details: "Toy 1 details...",
    },
    {
      picture: "toy2.jpg",
      name: "Toy 2",
      price: "$14.99",
      rating: "4.2",
      details: "Toy 2 details...",
    },
    
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Shop by Category</h1>
      <Tabs>
        <TabList className="flex mb-4">
          {categories.map((category, index) => (
            <Tab
              key={index}
              className="mr-2 py-2 px-4 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
            >
              {category.name}
            </Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            {category.subCategories.map((subCategory, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-lg font-bold mb-4">{subCategory}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {toys.map((toy, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
                    >
                      <img
                        src={toy.picture}
                        alt={toy.name}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold mb-2">{toy.name}</h3>
                        <p className="text-gray-600 mb-2">Price: {toy.price}</p>
                        <p className="text-gray-600 mb-4">
                          Rating: {toy.rating}
                        </p>
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default ShopByCategory;
