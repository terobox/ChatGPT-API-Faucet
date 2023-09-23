import Redis from "ioredis"; // Redis
import { getSession } from "next-auth/client"; // Session management
import type { NextApiRequest, NextApiResponse } from "next"; // Types

// Setup redis client
const client = new Redis(process.env.REDIS_URL);

/**
 * Checks if a twitter id has claimed from faucet in last 24h
 * @param {string} twitter_id to check
 * @returns {Promise<boolean>} claim status
 */
export async function hasClaimed(twitter_id: string): Promise<boolean> {
  // Check if key exists
  const resp: string | null = await client.get(twitter_id);
  // If exists, return true, else return false
  return resp ? true : false;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Collect session (force any for extra twitter params)
  const session: any = await getSession({ req });

  if (session) {
    try {
      // Collect claim status
      const claimed: boolean = await hasClaimed(session.twitter_id);
      res.status(200).send({ claimed });
    } catch {
      // If failure, return error checking status
      res.status(500).send({ error: "Error checking claim status." });
    }
  } else {
    // Return unauthed status
    res.status(401).send({ error: "Not authenticated." });
  }
};
