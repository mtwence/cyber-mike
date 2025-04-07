import {Skill} from "@/typings"
import { client } from "./sanity"

export const fetchSkills = async() => {
    const skills = await client.fetch(`*[_type == "skill"]`);
    
    if (!skills) {
        throw new Error('Failed to fetch skills');
    }
    
    return skills;
};
