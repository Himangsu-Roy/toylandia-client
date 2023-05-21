import React from "react";

import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import Gallery from "../../components/Gallery/Gallery";
import Testimonials from "../../components/Testimonials/Testimonials";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";

const HomeLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner></Banner>

      {/* Gallery Section */}
      <Gallery></Gallery>

      {/* Shop By Category */}
      <ShopByCategory></ShopByCategory>

      {/* Featured Section */}
      <Featured></Featured>

      {/* Testimonials */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomeLayout;
