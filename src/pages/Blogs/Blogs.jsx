import React from "react";
import useTitle from "../../utils/useTitle";

function Blogs() {
  useTitle("Blog");
  return (
    <div className="container mx-auto py-10 max-w-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Blogs</h1>
      <div className="grid gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-gray-700">
            An access token is a credential used to authenticate and authorize a
            user's protected their resources to othe user. Refresh tokens is
            long-lived tokens used to obtain new access tokens once the original
            one expires. Access and refresh tokens are typically used in
            token-based authentication systems.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="text-gray-700">
            SQL databases are relational databases that use tables to store data
            and enforce strict schema structures. NoSQL databases,
            non-relational databases that offer flexibility in data structures.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">
            What is Express.js? What is Nest JS?
          </h2>
          <p className="text-gray-700">
            Express.js is a fast and flexible web application framework for
            Node.js. NestJS is a progressive Node.js framework for building
            efficient server-side applications.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p className="text-gray-700">
            MongoDB aggregate is a framework for advanced data aggregation
            operations on MongoDB collections. It allows you to process and
            analyze data using a pipeline of stages, where each stages can
            include operations like filtering, grouping, sorting, joining, and
            projecting data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
