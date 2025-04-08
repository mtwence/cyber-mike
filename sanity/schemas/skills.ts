export default {
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        {
            name: "skillTitle",
            title: "SkillTitle",
            description: "Title of skill",
            type: "string"
        },
        {
            name: "progress",
            title: "Progress",
            type: "string",
            options: {
                list: [
                    { title: "Novice", value: "novice" },
                    { title: "Journeyman", value: "journeyman" },
                    { title: "Master", value: "master" }
                ]
            },
            description: "Skill proficiency level"
        },
        {
            name: "skillImage",
            title: "SkillImage",
            type: "image",
            options: {
                hotspot: true,
            }
        }
    ]
} 