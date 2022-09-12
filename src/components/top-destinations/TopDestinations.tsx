import Image from "next/image";
import Link from "next/link";
import React from "react";
import { topDestinatios } from "../../utils/locations";

type TopDestinationsProps = {};

const TopDestinations: React.FC<TopDestinationsProps> = () => {
  return (
    <section className=" my-10">
      <h2 className="text-2xl font-bold my-3 text-btn">Top Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topDestinatios.map((destination) => (
          <div className="group relative w-full md:w-[17rem] lg:w-[16rem] h-[14rem] rounded-md overflow-hidden ">
            <Image
              src={destination.picture}
              alt="Destination picture"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <span className="absolute top-0 left-2 text-gray-200 text-xl font-bold">
              {destination.name}
            </span>

            <Link href="/locations" passHref>
              <div className="hidden  w-full h-full px-3 group-hover:flex items-center justify-center z-20 absolute">
                <button className="w-full h-10 rounded-full bg-gradient-to-r from-btn to-btnHov text-xl font-bold text-white opacity-75 hover:opacity-100">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TopDestinations;
