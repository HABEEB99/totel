export interface UserDetailsProps {
  given_name: String;
  name: string;
  email: string;
  picture: string;
  sub: string;
}

export interface LocationDetailsProps {
  _id: string;
  name: string;
  price: number;
  rating: number;
  type: string;
  address: string;
  description: string;
  location: string;
  distance: string;
  slug: {
    current: string;
  };
  images: [{ asset: { url: string } }];
}

// *[_type == 'hotel']{
//   _id,
//   name,
//   price,
//   rating,
//   type,
//   address,
//   description,
//   location,
//   distance,
//   slug,
//   images[]{
//     asset->{
//     url
//   }
//   }
// }
