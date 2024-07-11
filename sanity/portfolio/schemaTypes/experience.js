

export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "jobTitle",
            title: "JobTitle",
            type: "string"
        },
        {
            name: "companyImage",
            title: "CompanyImage",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "startDate",
            title: "StartDate",
            type: "date",
        },
        {
            name: "endDate",
            title: "EndDate",
            type: "date",
        },
        {
            name: "currentlyWorking",
            title: "CurrentlyWorking",
            type: "boolean",
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{type: "reference", to: {type: "skill"}}]
        },
        {
            name: "points",
            title: "Points",
            type: "array",
            of: [{type:"string"}],
        },
        
    ]
}