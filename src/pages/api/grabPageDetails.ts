// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { client } from '../../sanity'
import {PageDetails} from '../../typings'

const query = groq`*[_type == "pageDetails"][0] {
  _id,
  name,
  role,
  "heroImage": heroImage.asset->url,
  backgroundInformation,
  "profilePic": profilePic.asset->url,
  phoneNumber,
  email,
  address,
  socials[]->,
  resume
}`

type Data = {
    pageDetails: PageDetails;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 const pageDetails: PageDetails = await client.fetch(query);
 res.status(200).json({pageDetails})
}
