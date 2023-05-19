import React from 'react';

const Gallery = () => {
    return (
      <div>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Explore our Toy Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Replace the placeholders with your actual gallery images */}
              <div className="bg-gray-200 h-64">
                <img src={img1} alt={img1} />
              </div>
              <div className="bg-gray-200 h-64">
                <img src={img2} alt="" />
              </div>
              <div className="bg-gray-200 h-64">
                <img src={img3} alt="" />
              </div>
              <div className="bg-gray-200 h-64">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Gallery;
