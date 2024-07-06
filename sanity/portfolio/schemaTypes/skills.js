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
            type: "number",
            description: "Progress of skill from 0 to 100",
            validation: (Rule) => Rule.min(0).max(100)
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