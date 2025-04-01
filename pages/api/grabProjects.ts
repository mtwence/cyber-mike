// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { client } from '../../sanity'
import {Project} from '../../typings'

const query = groq`*[_type == "project"] {
  _id,
  projectTitle,
  summary,
  websiteLink,
  repoLink,
  points,
  "projectImage": {
    "asset": projectImage.asset->
  },
  "technologies": technologies[]-> {
    _id,
    skillTitle,
    "skillImage": {
      "asset": skillImage.asset->
    }
  }
}`

type Data = {
    projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 const projects: Project[] = await client.fetch(query);
 res.status(200).json({projects})
}
