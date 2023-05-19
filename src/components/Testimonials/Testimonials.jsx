import React from 'react';

const Testimonials = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">
                "Toyland has the best selection of toys. My kids love everything
                they've gotten from here."
              </p>
              <p className="text-sm font-bold">- Amanda Smith</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">
                "The quality of the toys from Toyland is exceptional. Highly
                recommended!"
              </p>
              <p className="text-sm font-bold">- John Johnson</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">
                "I always find unique and educational toys at Toyland. It's a
                great place to shop."
              </p>
              <p className="text-sm font-bold">- Emily Davis</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">
                "Toyland's customer service is top-notch. They go above and
                beyond to help their customers."
              </p>
              <p className="text-sm font-bold">- Michael Thompson</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Testimonials;
