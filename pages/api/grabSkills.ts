// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { client } from '../../sanity'
import {Skill} from '../../typings'

const query = groq`*[_type == "skill"] {
    _id,
    _type,
    skillTitle,
    progress,
    "skillImage": {
        "url": skillImage.asset->url,
        "_type": skillImage._type,
        "asset": skillImage.asset->
    }
}`

type Data = {
    skills: Skill[]
} 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 const skills: Skill[] = await client.fetch(query);
 console.log('Fetched skills:', skills);
 res.status(200).json({ skills })
}
