import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/attachment_80402256-removebg-preview (1).png";

const Footer = () => {
  const productCategories = [
    { title: "Accessories", url: "/category1" },
    { title: "Clothes", url: "/category2" },
    { title: "Green Products", url: "/category3" },
    { title: "Educational Products", url: "/category4" },
    { title: "Toys", url: "/category5" },
    { title: "Miscellaneous", url: "/category6" },
  ];

  const quickLinks = [
    { title: "About us", url: "/link1" },
    { title: "Products", url: "/link2" },
    { title: "Testimonials", url: "/link3" },
    { title: "Shop locator", url: "/link4" },
    { title: "Online shop", url: "/link5" },
    { title: "Bolg", url: "/blog" },
  ];

  const headQuarters = [
    { address: "374 Main Street 09733 Western London" },
    { email: "info@example.com" },
    { phone: "+1(44)123-45-67" },
  ];

  return (
    <footer className="w-full md:pt-20 pt-10 bg-[#343434] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row container">
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
          <h1 className="uppercase mt-9">Find us any Elsewhere</h1>
          <div className="mt-4 gap-4 flex flex-wrap">
            {" "}
            <Link>facebook</Link>
            <Link>instagram</Link>
            <Link>twitter</Link>
            <Link>linkdin</Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div>
            <h3 className="mb-8 lg:mb-3  text-lg font-semibold text-white">
              Product Categories
            </h3>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-[#A6A6A6]">
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
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-[#A6A6A6]">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 lg:mb-3  text-lg font-semibold text-white">
              Our HeadQuarters
            </h3>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-[#A6A6A6]">
              {headQuarters.map((item, index) => (
                <li key={index}>
                  {item.address}
                  {item.email}
                  {item.phone}
                </li>
              ))}
              <Link to="/">
                <img src={logo} className="w-[60px]" alt="logo" />
              </Link>
            </ul>
          </div>
        </div>

        {/*  */}
      </div>
      <div className="bg-[#1A1A1A] flex items-center py-3 md:mt-20 mt-10">
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
