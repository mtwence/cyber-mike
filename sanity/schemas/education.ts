export default {
    name: "education",
    title: "Education",
    type: "document",
    fields: [
        {
            name: "school",
            title: "School",
            type: "string"
        },
        {
            name: "schoolImage",
            title: "SchoolImage",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "degree",
            title: "Degree",
            type: "string"
        },
        {
            name: "dateStarted",
            title: "DateStarted",
            type: "date"
        },
        {
            name: "dateEnded",
            title: "DateEnded",
            type: "date"
        },
        {
            name: "isCurrentlyStudyingHere",
            title: "IsCurrentlyStudyingHere",
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
        }
    ]
} 