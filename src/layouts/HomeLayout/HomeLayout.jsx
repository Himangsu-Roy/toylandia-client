import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.webp";

const HomeLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Toyland</h1>
          <p className="text-lg">
            Discover a world of amazing toys for kids of all ages.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Explore our Toy Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Replace the placeholders with your actual gallery images */}
            <div className="bg-gray-200 h-64">
              <img src={img1} alt={img1} />
            </div>
            <div className="bg-gray-200 h-64"><img src={img2} alt="" /></div>
            <div className="bg-gray-200 h-64"><img src={img3} alt="" /></div>
            <div className="bg-gray-200 h-64"><img src={img4} alt="" /></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeLayout;
