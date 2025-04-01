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
    };
}

interface File {
    _type: "file";
    asset: {
        _ref: string;
        _type: "reference";
    };
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
    progress: number;
    skillTitle: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    skillImage: Image;
    progress: number;
    skillTitle: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    jobTitle: string;
    companyImage: Image;
    startDate: date;
    endDate: date;
    currentlyWorking: boolean;
    points: string[];
    technologies: Technology[];

}


export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linktoBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Education extends SanityBody {
    _type: "education";
    school: string;
    concentration: string;
    finishDate: string;
    schoolImage: Image;
}




