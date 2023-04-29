import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

type Callback<ReturnType> = (
  req: NextApiRequest,
  res: NextApiResponse
) => ReturnType;

/**
 * An higher order function to make a protected API route. Allowed to use it at server side.
 */
const withAuth =
  (callback: Callback<void>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ message: "You must be logged in." });
      return;
    }

    callback(req, res);
  };

export default withAuth;
