import {Experience} from "@/typings"
import { client } from "./sanity"

export const fetchExperiences = async() => {
    const experiences = await client.fetch(`*[_type == "experience"]`);
    
    if (!experiences) {
        throw new Error('Failed to fetch experiences');
    }
    
    return experiences;
};
