import type { NextApiRequest, NextApiResponse } from "next";
import { locationQuery } from "../../../utils/queries";
import client from "../../../utils/sanity";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { slug } = req.query;

    const query = locationQuery(slug!);

    const data = await client.fetch(query);

    res.status(200).json(data[0]);
  }
};

export default handler;
