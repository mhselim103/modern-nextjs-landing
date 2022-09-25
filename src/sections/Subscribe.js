import React from "react";

const Subscribe = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-6xl gap-6 p-12 mx-auto text-white bg-gradient-to-r from-custom via-red-400 to-pink-500"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl">Subscribe to our Blog</h1>
        <p className="text-base">Get notified to our blogs on your email</p>
      </div>
      <div className="flex w-[45vw] bg-white rounded-full px-2 ">
        <input
          type="email"
          className="w-[30vw] outline-none rounded-full text-black "
          placeholder="Type Your Email Here"
        />
        <button className=" text-white btn bg-custom w-[15vw] my-1 ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
