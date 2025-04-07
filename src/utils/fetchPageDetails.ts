import {PageDetails} from "@/typings"
import { client } from "./sanity"

export const fetchPageDetails = async() => {
    const pageDetails = await client.fetch(`*[_type == "pageDetails"][0]`);
    
    if (!pageDetails) {
        throw new Error('Failed to fetch page details');
    }
    
    return pageDetails;
};
