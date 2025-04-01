import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { client } from '../../sanity'
import { Education } from '../../typings'

const query = groq`*[_type == "education"] {
  _id,
  school,
  concentration,
  finishDate,
  "schoolImage": schoolImage.asset->url
}`

type Data = {
    education: Education[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const education: Education[] = await client.fetch(query);
  res.status(200).json({ education })
} 