export default {
    name: "education",
    title: "Education",
    type: "document",
    fields: [
        {
            name: "school",
            title: "School",
            type: "string",
        },
        {
            name: "concentration",
            title: "Concentration",
            type: "string",
        },
        {
            name: "finishDate",
            title: "Finish Date",
            type: "string",
        },
        {
            name: "schoolImage",
            title: "School Image",
            type: "image",
            options: {
                hotspot: true,
            }
        }
    ]
} 