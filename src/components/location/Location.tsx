import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LocationDetailsProps } from "../../../typings";
import { urlFor } from "../../utils/sanity";

import { MdLocationPin } from "react-icons/md";

type LocationProps = {
  data: LocationDetailsProps;
};

const Location: React.FC<LocationProps> = ({ data }) => {
  const {
    name,
    price,
    address,
    description,
    distance,
    images,
    type,
    slug,
    rating,
    location,
  } = data;
  return (
    <div className="group w-full md:w-[22rem] lg:w-[16rem] h-[18rem] bg-gray-500 rounded-md">
      <div className="relative w-full h-[85%] rounded-md">
        <Image
          src={urlFor(images[0]).url()}
          layout="fill"
          objectFit="cover"
          alt="Location Picture"
          className="rounded-t-md"
        />

        <div className="absolute w-full h-full hidden group-hover:flex items-center justify-center">
          <MdLocationPin className="font-bold text-red-500" />
          <span className="bg-gradient-to-r from-btn to-btnHov bg-clip-text text-transparent text-xl font-bold">
            {location}
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-between p-1">
        <h1 className="text-sm font-bold text-btnHov">{name}</h1>
        <Link href={`/locations/${slug.current}`} passHref>
          <button className="text-xs font-bold text-gray-300 hover:text-white rounded-full hover:bg-gradient-to-r from-btn to-btnHov h-8 w-24">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Location;
