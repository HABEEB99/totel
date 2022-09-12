export const locationsQuery = `*[_type == 'hotel']{
    _id,
    name,
    price,
    rating,
    type,
    address,
    description,
    location,
    distance,
    slug,
    images[]{
      asset->{
      url
    }
    }
  }`;

export const locationQuery = (slug: string | Array<string>) => {
  const query = `*[_type == 'hotel' && slug.current == '${slug}']{
        _id,
        name,
        price,
        rating,
        type,
        address,
        description,
        location,
        distance,
        slug,
        images[]{
          asset->{
          url
        }
        }
      }`;

  return query;
};
