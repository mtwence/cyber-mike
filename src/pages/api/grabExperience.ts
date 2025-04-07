// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { client } from '../../sanity'
import {Experience} from '../../typings'

const query = groq`*[_type == "experience"] {
  _id,
  company,
  jobTitle,
  "companyImage": companyImage.asset->url,
  startDate,
  endDate,
  currentlyWorking,
  points,
  technologies[] ->,
  "linkUrl": {
    "type": linkUrl.type,
    "url": linkUrl.url,
    "file": linkUrl.file.asset->
  },
  linkTitle
}
`


type Data = {
    experience: Experience []
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 const experience: Experience[] = await client.fetch(query);
 res.status(200).json({experience})
}
