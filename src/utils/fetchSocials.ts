import {Social} from "@/typings"
import { client } from "./sanity"

export const fetchSocials = async() => {
    const socials = await client.fetch(`*[_type == "social"]`);
    
    if (!socials) {
        throw new Error('Failed to fetch socials');
    }
    
    return socials;
};

// ... rest of the file ... 