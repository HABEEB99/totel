import type { NextApiRequest, NextApiResponse } from "next";
import { locationsQuery } from "../../../utils/queries";
import client from "../../../utils/sanity";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const data = await client.fetch(locationsQuery);
    res.status(200).json(data);
  }
};

export default handler;
