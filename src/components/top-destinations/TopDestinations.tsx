import Image from "next/image";
import React from "react";
import { topDestinatios } from "../../utils/locations";

type TopDestinationsProps = {};

const TopDestinations: React.FC<TopDestinationsProps> = () => {
  return (
    <section className=" my-10">
      <h2 className="text-2xl font-bold my-2">Top Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topDestinatios.map((destination) => (
          <div className="relative w-full md:w-[17rem] lg:w-[16rem] h-[14rem] rounded-md hover:scale-110 overflow-hidden ">
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
          </div>
        ))}
      </div>
    </section>
  );
};
export default TopDestinations;
