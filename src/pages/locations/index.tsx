import axios from "axios";
import React from "react";
import { LocationDetailsProps } from "../../../typings";
import PageLayout from "../../components/layout/PageLayout";
import Location from "../../components/location/Location";
import { BASE_URL } from "../../utils/baseUrl";

type LocationsProps = {
  locations: Array<LocationDetailsProps>;
};

const Locations: React.FC<LocationsProps> = ({ locations }) => {
  return (
    <PageLayout title="LOCATIONS" description="Locations page">
      <h1 className="text-2xl text-btn font-bold mb-2">Locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {locations.map((location) => (
          <Location key={location._id} data={location} />
        ))}
      </div>
    </PageLayout>
  );
};
export default Locations;

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/locations`);
  return {
    props: {
      locations: data,
    },
  };
};
