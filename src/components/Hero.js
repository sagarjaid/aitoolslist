import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <div className="flex flex-col gap-1 items-center">
        <div className="text-2xl font-semibold">AI Tools for Every Use Case</div>
        <div className="text-sm">Discovering the Power of AI: A Comprehensive List of AI Tools</div>
      </div>
      <form class="text-gray-600 w-full sm:w-3/4 rounded-full border-2 sm:border-2 border-black flex justify-around items-center px-2">
        <input
          type="text"
          name="url"
          title="Please enter correct tiktok url"
          placeholder="type AI tool name..."
          className="w-full h-12 px-2 m:h-14 rounded-l-full text-sm font-light focus:outline-none text-black placeholder:text-slate-600 placeholder:font-light"
          value=""
        />
        <span class="flex items-center">
          <button
            type="submit"
            class="px-4 bg-black w-min flex justify-center h-8 m:h-10 items-center rounded-full text-white"
          >
            <span class="mr-1">Search</span>
          </button>
        </span>
      </form>
    </div>
  );
};

export default Hero;
