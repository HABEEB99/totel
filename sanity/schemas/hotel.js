export default {
  name: "hotel",
  title: "Hotel",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
      },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "distance",
      title: "Distance",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],
};
