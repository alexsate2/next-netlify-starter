// export default async (req, res) => {
//     // Do something slow
//   };
  
//   export const config = {
//     type: "experimental-background",
//   };
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}