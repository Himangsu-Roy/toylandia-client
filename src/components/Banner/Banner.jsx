import React from "react";
import banner from "../../assets/model-car-g99a9a72ed_1920.jpg";

const Banner = () => {
  const bgImage = `url(${banner})`;
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat md:h-screen"
        style={{ backgroundImage: bgImage }}
      >
        <div className="absolute inset-0 md:bg-black/40 bg-black/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-fit lg:items-center lg:px-8">
          <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white ">
              Discover a world of amazing toy cars for kids of all ages.
              <strong className="block font-extrabold text-[#EE552A]">
                ToyLandia.
              </strong>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
