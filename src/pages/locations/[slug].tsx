import React, { useState } from "react";
import { GetStaticProps } from "next";
import client, { urlFor } from "../../utils/sanity";
import { LocationDetailsProps } from "../../../typings";
import { locationQuery } from "../../utils/queries";
import PageLayout from "../../components/layout/PageLayout";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";

interface LocationProp {
  _id: string;
  slug: {
    current: string;
  };
}
type LocationDetailedPageProps = {
  data: LocationDetailsProps;
};

const LocationDetailedPage: React.FC<LocationDetailedPageProps> = ({
  data,
}) => {
  const {
    address,
    description,
    distance,
    images,
    location,
    name,
    price,
    rating,
    type,
  } = data;
  console.log(data);

  const [index, setIndex] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  //   const [checkinDate, setCheckinDate] = useState<string>("Select Date");

  const handleChangeInDays = (e: any) => {
    e.preventDefault();
    setDays(e.target.value);
  };

  const total = () => {
    if (!days) {
      return price;
    } else {
      return days * price;
    }
  };
  return (
    <PageLayout title="LOCATION DETAILS" description="Location details page">
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row w-full min-h-[50vh] lg:space-x-6">
        <div className="w-full lg:w-[50%] h-full flex flex-col space-y-4">
          <div className="relative w-full h-[18rem] rounded-md">
            <Image
              src={urlFor(images[index]).url()}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          <div className="grid gap-2 grid-cols-2 md:grid-cols-4 ">
            {images.map((image, idx) => (
              <div
                onClick={() => setIndex(idx)}
                className={`w-[10.5rem] lg:w-[8rem] h-[8rem] relative rounded-md cursor-pointer ${
                  idx === index ? "bg-btnHov opacity-50" : ""
                }`}
              >
                <Image
                  src={urlFor(image).url()}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4 h-full w-full lg:w-[50%]">
          <h1 className="bg-gradient-to-r bg-clip-text from-btn to-btnHov text-2xl font-bold text-transparent">
            {name}
          </h1>

          <div>
            <p className="text-base text-gray-400 dark:text-gray-400">
              <span className="text-lg text-gray-500 dark:text-gray-200 font-bold">
                Description:{" "}
              </span>
              {description}
            </p>
          </div>

          <div className="flex items-center space-x-1">
            <MdLocationPin className="font-bold text-red-500" />
            <p className="text-gray-400">{address}</p>
          </div>

          <span className="text-gray-400">
            <span className="text-gray-500 dark:text-gray-200 text-xl font-bold">
              ${price}
            </span>{" "}
            per day
          </span>

          <div className="flex space-x-2 items-center">
            <label htmlFor="nights" className="text-gray-400">
              Select check-in date
            </label>
            <input type="date" className="rounded-md px-2 bg-gray-400" />
          </div>

          <div className="flex space-x-2 items-center">
            <label htmlFor="nights" className="text-gray-400">
              Input no of days
            </label>
            <input
              type="text"
              value={days}
              onChange={handleChangeInDays}
              className="w-10 h-6 rounded-md px-2 bg-slate-400"
            />
          </div>

          <span className="text-gray-400">
            <span className="text-gray-500 dark:text-gray-200 text-xl font-bold">
              Total:{" "}
            </span>{" "}
            ${total()}
          </span>

          <button className="opacity-70 hover:opacity-100 w-full h-10 rounded-full text-white font-bold text-xl bg-gradient-to-r from-btn to-btnHov">
            Make Reservation
          </button>
        </div>
      </div>
    </PageLayout>
  );
};
export default LocationDetailedPage;

export const getStaticPaths = async () => {
  const locationQuery = `*[_type == 'hotel']{
    _id, 
    slug{
        current
    }
}`;
  const locations = await client.fetch(locationQuery);

  const paths = locations.map((location: LocationProp) => ({
    params: {
      slug: location.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const location = await client.fetch(locationQuery(params?.slug!));
  const data = location[0];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 120,
  };
};
