import React from "react";

const Error = () => {
  return (
    <div>
      <div className="flex justify-around">
        <img className="w-1/3" src="/public/404.png" alt="" />
      </div>
      <div className="font-semibold text-center text-4xl">
        <h1 >Please Enter right url</h1>
      <h1 className="text-xl">Or,</h1>
      <h1>You Can Use The NavBar To Explore</h1>
      </div>
      
    </div>
  );
};

export default Error;
