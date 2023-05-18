import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const productCategories = [
    { title: "Category 1", url: "/category1" },
    { title: "Category 2", url: "/category2" },
    { title: "Category 3", url: "/category3" },
  ];

  const quickLinks = [
    { title: "Link 1", url: "/link1" },
    { title: "Link 2", url: "/link2" },
    { title: "Link 3", url: "/link3" },
  ];

  return (
    <footer className="w-full bg-[#343434] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row ">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-2xl font-bold uppercase tracking-wider">
            Sign up for our Newsletter
          </h1>
          <form
            action=""
            className="mt-4 inline-flex w-full items-center md:w-3/4"
          >
            <input
              className="flex h-10 w-full rounded-full border-2 border-[#A5A5A5] bg-transparent px-3 py-2 text-sm placeholder:text-[#A5A5A5] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
              type="email"
              placeholder="enter email address"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-[#EE552A] px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#EE552A]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
          <h1>Find us any where</h1>
          <div className=" gap-4 flex flex-wrap">
            {" "}
            {/* flex-col sm:flex-row */}
            <Link>facebook</Link>
            <Link>facebook</Link>
            <Link>facebook</Link>
            <Link>facebook</Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          {/* {Array.from({ length: 1 }).map((_, i) => (
            <div key={i} className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">
                Product Categories
              </p>
             
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
          ))} */}

          <div>
            <h3 className="mb-8 lg:mb-3  text-lg font-semibold text-white">
              Product Categories
            </h3>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              {productCategories.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 lg:mb-3  text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*  */}
      </div>
      <div className="bg-[#1A1A1A] flex items-center py-3 mt-4">
        {/* <hr className="my-4 " /> */}
        <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 ">
          <div className="inline-flex items-center">
            <div className="m-4 ">
              <p className="text-sm font-medium text-white uppercase">
                © 2023 <span className="text-[#EE552A]">ToyLandia</span>. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
