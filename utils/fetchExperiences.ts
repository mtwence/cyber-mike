import {Experience} from "../typings"

export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/grabExperience`);
    
    if (!res.ok) {
        throw new Error(`Failed to fetch experiences: ${res.status}`);
    }

    const data = await res.json();
    console.log('Fetched experiences data:', data); // Log the fetched data
    return data.experience || []; // Ensure this returns an array, default to empty array
};
