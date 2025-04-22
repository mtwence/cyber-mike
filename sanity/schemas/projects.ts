export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "projectTitle",
            title: "Project Title",
            type: "string"
        },
        {
            name: "projectImage",
            title: "Project Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "summary",
            title: "Summary",
            type: "string"
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }]
        },
        {
            name: "points",
            title: "Project Points",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "websiteLink",
            title: "Website Link",
            type: "url"
        },
        {
            name: "repoLink",
            title: "Repository Link",
            type: "url"
        }
    ]
} 