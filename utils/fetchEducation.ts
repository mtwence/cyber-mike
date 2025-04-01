import { Education } from "../typings"

export const fetchEducation = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/grabEducation`);
    
    if (!res.ok) {
        throw new Error(`Failed to fetch education: ${res.status}`);
    }

    const data = await res.json();
    console.log('Fetched education data:', data);
    return data.education || [];
}; 