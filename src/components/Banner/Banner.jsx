import React from "react";
import banner from "../../assets/banner.jpg";

const Banner = () => {
    const bgImage = `url(${banner})`;
  return (
    <div>
      {/* <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className=" bg-black bg-opacity-60  relative">
            <h1 className="text-4xl font-bold mb-4 ">Welcome to Toyland</h1>
            <p className="text-lg  ">
              Discover a world of amazing toys for kids of all ages.
            </p>
          </div>
          <img className="" src={banner} alt="" />
        </div>
      </section> */}
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
      {/* bg-[url(https://img.freepik.com/free-vector/hand-drawn-kids-toys-twitch-background_23-2149650912.jpg?w=1060&t=st=1684660762~exp=1684661362~hmac=d161f6943d7da49938e8baa64a1ee61ee0dcf213aef60ac37aa439259a90067e)] */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: bgImage }}
      >
        <div className="absolute inset-0 md:bg-black/40 bg-black/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-fit lg:items-center lg:px-8">
          <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Discover a world of amazing toys for kids of all ages.
              <strong className="block font-extrabold text-[#EE552A]">
                ToyLandia.
              </strong>
            </h1>
          </div>
        </div>
      </section>
      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
                  <img
            src={banner}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
