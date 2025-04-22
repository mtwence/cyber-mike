export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "jobTitle",
            title: "JobTitle",
            type: "string"
        },
        {
            name: "company",
            title: "Company",
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
            type: "date"
        },
        {
            name: "endDate",
            title: "EndDate",
            type: "date"
        },
        {
            name: "currentlyWorking",
            title: "CurrentlyWorking",
            type: "boolean"
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }]
        },
        {
            name: "points",
            title: "Points",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "linkUrl",
            title: "LinkUrl",
            type: "object",
            fields: [
                {
                    name: "type",
                    title: "Type",
                    type: "string",
                    options: {
                        list: [
                            { title: "URL", value: "url" },
                            { title: "File", value: "file" }
                        ]
                    }
                },
                {
                    name: "url",
                    title: "URL",
                    type: "url"
                },
                {
                    name: "file",
                    title: "File",
                    type: "file"
                }
            ]
        },
        {
            name: "linkTitle",
            title: "LinkTitle",
            type: "string"
        }
    ]
} 