import React from "react";
import { useState } from "react";

export default function ToyDetails({ toy }) {
  const [showModal, setShowModal] = useState(false);

  const {
    description,
    pictureURL,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    subCategory,
    toyName,
    _id,
    } = toy;
    

  return (
    <>
      <button
        className="bg-[#EE552A] text-white active:bg-[#c03b17] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View Details
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Toy Details</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="bg-gray-100 p-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between">
                      <img
                        src={pictureURL}
                        alt={toyName}
                        className="w-64 h-64 object-cover rounded-lg"
                      />
                      <div className="ml-8">
                        <h2 className="text-3xl font-bold mb-4">{toyName}</h2>
                        <h3 className="text-lg mb-2">
                          Category: {subCategory}
                        </h3>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <div className="flex items-center">
                          <span className="mr-2 text-lg font-bold">Price:</span>
                          <span className="text-green-500 text-2xl">
                            ${price}
                          </span>
                        </div>
                        <div className="flex items-center mt-4">
                          <span className="mr-2 text-lg font-bold">
                            Quantity:
                          </span>
                          <span className="text-gray-600">{quantity}</span>
                        </div>
                        <div className="flex items-center mt-4">
                          <span className="mr-2 text-lg font-bold">
                            Rating:
                          </span>
                          <span className="text-yellow-500">{rating}</span>
                        </div>
                        <div className="flex items-center mt-4">
                          <span className="mr-2 text-lg font-bold">
                            Seller:
                          </span>
                          <span>{sellerName}</span>
                        </div>
                        <div className="flex items-center mt-2">
                          <span className="mr-2 text-lg font-bold">Email:</span>
                          <span>{sellerEmail}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
