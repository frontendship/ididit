import withAuth from "@/util/withAuth";
import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({
    message: "Success",
  });
}

export default withAuth(handler);
