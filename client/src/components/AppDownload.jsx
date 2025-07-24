import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="w-full px-4 2xl:px-32 mx-auto my-20">
      <div className="relative bg-gradient-to-r from-violet-50 to-purple-100 rounded-2xl flex items-center justify-between overflow-hidden p-10 lg:p-20">
        {/* Text and buttons */}
        <div className="z-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md">
            Download Mobile App For Better Experience
          </h1>
          <div className="flex gap-4">
            <a href="#" className="inline-block">
              <img className="h-12" src={assets.play_store} alt="Google Play" />
            </a>
            <a href="#" className="inline-block">
              <img className="h-12" src={assets.app_store} alt="App Store" />
            </a>
          </div>
        </div>

        {/* Image */}
        <img
          className="absolute right-10 bottom-0 w-72 max-lg:hidden"
          src={assets.app_main_img}
          alt="App Preview"
        />
      </div>
    </div>
  );
};

export default AppDownload;
