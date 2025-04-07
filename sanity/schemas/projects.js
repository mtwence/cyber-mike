export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "projectTitle",
            title: "ProjectTitle",
            description: "title of the project",
            type: "string"
        },
        {
            name: "projectImage",
            title: "ProjectImage",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "summary",
            title: "Summary",
            type: "text",
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
        {
            name: "websiteLink",
            title: "Website Link",
            type: "url",
        },
        {
            name: "repoLink",
            title: "Repository Link",
            type: "url",
        },
    ]
}