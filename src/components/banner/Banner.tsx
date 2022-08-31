import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { locations } from "../../utils/locations";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);
  const handleSearchBar = () => {
    setOpenSearchBar((prev) => !prev);
  };
  return (
    <div className="w-full relative min-h-[60vh] shadow-md shadow-modal flex flex-col md:flex-row px-2 md:px-6 lg:px-10">
      <div className="w-full md:w-[50%] flex flex-col space-y-5 py-4 md:py-0 items-start justify-center">
        <h1 className="text-3xl md:text-4xl opacity-70 md:pb-2 lg:text-5xl font-bold text-transparent bg-gradient-to-r from-btn to-btnHov bg-clip-text">
          Feeling Adventurous?
        </h1>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-200">
          Discover new places to stay, live, work or just relax
        </p>
        <button
          onClick={handleSearchBar}
          className="text-xl font-bold transition duration-500 ease-in-out text-white bg-gradient-to-r opacity-90 hover:opacity-100 from-btn to-btnHov h-12 w-full md:w-96 rounded-full"
        >
          Explore A Location
        </button>
      </div>

      <div className="w-full md:w-[50%] flex items-center justify-center">
        <div className="relative w-96 h-96">
          <Image
            src="/banner.png"
            layout="fill"
            objectFit="cover"
            alt="banner picture"
          />
        </div>
      </div>

      {/* Search Bar */}
      {openSearchBar && (
        <div className="flex items-center justify-center w-full min-h-[4rem] absolute -bottom-8 left-0 px-8">
          <div className="flex-1 h-full border-2  bg-stone-400  border-gray-300 rounded-md px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="h-full w-full md:w-[20%] py-1 md:pr-2 md:border-r-gray-200 md:border-r-[1px] flex flex-col">
              <label htmlFor="locations" className="text-base font-bold ">
                Locations
              </label>
              <select
                name="locations"
                id="locations"
                className="text-sm outline-none bg-stone-400"
              >
                {locations.map((location) => (
                  <option>{location.name}</option>
                ))}
              </select>
            </div>

            <div className="h-full w-full md:w-[20%] py-1 flex flex-col md:border-r-gray-200 md:border-r-[1px] md:px-4">
              <label htmlFor="checkin" className="text-base font-bold ">
                Check In
              </label>
              <input
                type="date"
                id="checkin"
                className="outline-none bg-transparent text-sm"
              />
            </div>

            <div className="h-full w-full flex flex-col md:w-[20%] py-1 md:border-r-gray-200 md:border-r-[1px] md:px-4">
              <label htmlFor="checkout" className="text-base font-bold ">
                Check Out
              </label>
              <input
                type="date"
                id="checkout"
                className="outline-none bg-transparent text-sm"
              />
            </div>

            <div className="h-full flex flex-col w-full md:w-[20%] py-1 md:border-r-gray-200 md:border-r-[1px] md:px-4">
              <label htmlFor="guests" className="text-base font-bold ">
                Guests
              </label>
              <input
                type="text"
                placeholder="0"
                id="guests"
                className="outline-none  text-sm font-bold "
              />
            </div>

            <div className="h-full w-full md:w-[20%] py-1 md:pl-4 flex items-center justify-center">
              <button className="flex items-center justify-center text-white text-2xl opacity-70 hover:opacity-100 h-10 w-full rounded-md bg-gradient-to-r from-btn to-btnHov">
                <FaSearch className="text-xl mt-1 mr-2 opacity-70 hover:opacity-100" />
                <span> Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Banner;
