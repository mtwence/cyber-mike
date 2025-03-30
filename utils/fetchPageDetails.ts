import {PageDetails} from "../typings"

export const fetchPageDetails = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/grabPageDetails`);

    const data = await res.json();
    const pageDetails: PageDetails = data.pageDetails;
    
    return pageDetails
};
