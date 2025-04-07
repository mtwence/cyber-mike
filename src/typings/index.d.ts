interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface Social extends SanityBody {
    type:'social';
    title: string;
    url: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
        url: string;
    };
}

interface File {
    _type: "file";
    asset: {
        _ref: string;
        _type: "reference";
    };
    url?: string;
}

export interface PageDetails extends SanityBody {
    _type: "pageDetails"
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    resume: File;
}

export interface Technology extends SanityBody {
    _type: "skill";
    skillImage: Image;
    progress: "novice" | "journeyman" | "master";
    skillTitle: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    skillImage: Image;
    progress: "novice" | "journeyman" | "master";
    skillTitle: string;
}

interface LinkUrl {
    type: "url" | "file";
    url?: string;
    file?: File;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    jobTitle: string;
    startDate: date;
    endDate: date;
    currentlyWorking: boolean;
    points: string[];
    technologies: Technology[];
    linkUrl?: LinkUrl;
    linkTitle?: string;
}

export interface Project extends SanityBody {
    projectTitle: string;
    _type: "project";
    projectImage: Image;
    websiteLink: string;
    repoLink: string;
    summary: string;
    technologies: Technology[];
    points: string[];
}

export interface Education extends SanityBody {
    _type: "education";
    school: string;
    concentration: string;
    finishDate: string;
    schoolImage: Image;
    linkUrl?: LinkUrl;
    linkTitle?: string;
}




