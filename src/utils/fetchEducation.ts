import { Education } from "@/typings"
import { client } from "./sanity"

export const fetchEducation = async() => {
    const education = await client.fetch(`*[_type == "education"]`);
    
    if (!education) {
        throw new Error('Failed to fetch education');
    }
    
    return education;
}; 