import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Question = () => {
  return (
    <div className="flex flex-col gap-6 my-5">
        {/* ------------------------------ */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 py-3 shadow-md shadow-blue-500 rounded-lg"
      >
        <div className="collapse-title text-2xl font-semibold">
        When should you use context API?
        </div>
        <div className="collapse-content flex flex-col gap-3">
            <p>Context API is a feature in React that allows you to share data between components without having to pass props down through every level of the component tree.</p>
          <p><FontAwesomeIcon icon={faStar}/> While Sharing data or state across multiple components that are not directly related in the component tree</p>
          <p><FontAwesomeIcon icon={faStar}/> While Providing a global event system for triggering actions or handling events.</p>
          <p><FontAwesomeIcon icon={faStar}/> To managing application-wide settings, such as theme preferences or user authentication data.</p>
          <p><FontAwesomeIcon icon={faStar}/> To dynamically modifying the behavior or appearance of components based on application-wide state.</p>
          <p><FontAwesomeIcon icon={faStar}/> For managing state for forms or other data entry components.</p>
        </div>
      </div>
      {/* -------------------------------- */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 py-3 shadow-md shadow-blue-500 rounded-lg"
      >
        <div className="collapse-title text-2xl font-semibold">
        What is a custom hook?
        </div>
        <div className="collapse-content flex flex-col gap-3">
            <p>custom hook is a function that uses the built-in React hooks to encapsulate and reuse stateful logic in a composable way as like useEffect. Custom hooks allow us to remove complex or repetitive logic from your components and reuse it in react application.</p>
          
        </div>
      </div>
      {/* -------------------------------- */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 py-3 shadow-md shadow-blue-500 rounded-lg"
      >
        <div className="collapse-title text-2xl font-semibold">
        What is useRef?
        </div>
        <div className="collapse-content flex flex-col gap-3">
            <p>useRef() is a hook that provides a way to store and access mutable values that are related to a particular component instance. The useRef() hook returns a mutable object with a current property that can be set and read during the lifetime of the component.</p>
          
        </div>
      </div>
      {/* -------------------------------- */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 py-3 shadow-md shadow-blue-500 rounded-lg"
      >
        <div className="collapse-title text-2xl font-semibold">
        What is useMemo?
        </div>
        <div className="collapse-content flex flex-col gap-3">
            <p>useMemo() is a hook that allows you to memoize large computations so that they are only re-computed when their dependencies have changed. Memoization is a technique for optimizing functions by caching their results based on their input parameters. By using useMemo() we can avoid unnecessary re-computations and improve the performance of react application.</p>
         
        </div>
      </div>
      {/* -------------------------------- */}
     

    </div>
  );
};

export default Question;
