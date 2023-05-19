import React from "react";

function Blogs() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">
            What is an access token and refresh token?
          </h2>
          <p className="text-gray-700">
            An access token is a credential used to authenticate and authorize a
            user's access to protected resources in a system. It is usually
            short-lived and contains information like user identity and
            permissions. Refresh tokens, on the other hand, are long-lived
            tokens used to obtain new access tokens once the original one
            expires. They provide a way to maintain a user's session without
            requiring them to reauthenticate every time. Access and refresh
            tokens are typically used in token-based authentication systems.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="text-gray-700">
            SQL (Structured Query Language) databases are relational databases
            that use tables to store data and enforce strict schema structures.
            They are suitable for applications with complex relationships and
            require transactions support. NoSQL (Not Only SQL) databases, on the
            other hand, are non-relational databases that offer flexibility in
            data structures, scalability, and high performance. They are
            suitable for applications with large amounts of unstructured or
            semi-structured data and require horizontal scalability.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">What is Express.js?</h2>
          <p className="text-gray-700">
            Express.js is a fast, minimalist, and flexible web application
            framework for Node.js. It provides a set of robust features for
            building web applications and APIs, such as routing, middleware
            support, and template engines. Express.js simplifies the process of
            building server-side applications by providing a lightweight and
            unopinionated framework that allows developers to structure their
            code and handle HTTP requests and responses efficiently.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">What is Nest JS?</h2>
          <p className="text-gray-700">
            NestJS is a progressive Node.js framework for building efficient,
            reliable, and scalable server-side applications. It combines the
            best features of modern frameworks, such as dependency injection,
            decorators, and TypeScript support, to enable developers to build
            robust and maintainable applications. NestJS follows the modular
            architecture and is built with TypeScript, making it a powerful
            choice for building complex backend systems with ease.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p className="text-gray-700">
            MongoDB aggregate is a framework for performing advanced data
            aggregation operations on MongoDB collections. It allows you to
            process and analyze data using a pipeline of stages, where each
            stage performs a specific operation on the data. The stages can
            include operations like filtering, grouping, sorting, joining, and
            projecting data. MongoDB aggregate provides powerful and flexible
            aggregation capabilities, enabling you to perform complex data
            transformations and computations within the database itself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
