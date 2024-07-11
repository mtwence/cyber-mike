import {Experience} from "../typings"

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);

    const data = await res.json();
    const xps: Experience[] = data.xps;
    
    return xps
};
