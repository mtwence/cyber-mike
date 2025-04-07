import {Project} from "@/typings"
import { client } from "./sanity"

export const fetchProjects = async() => {
    const projects = await client.fetch(`
        *[_type == "project"] {
            ...,
            technologies[]->{
                ...,
                skillImage
            }
        }
    `);
    
    if (!projects) {
        throw new Error('Failed to fetch projects');
    }
    
    return projects;
};
