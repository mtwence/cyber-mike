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
        },
        {
            name: "linkUrl",
            title: "Link URL or File",
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
                    type: "url",
                    hidden: ({ parent }) => parent?.type !== "url"
                },
                {
                    name: "file",
                    title: "File",
                    type: "file",
                    hidden: ({ parent }) => parent?.type !== "file"
                }
            ]
        },
        {
            name: "linkTitle",
            title: "Link Title",
            type: "string",
            description: "Text to display on the link button"
        }
    ]
} 