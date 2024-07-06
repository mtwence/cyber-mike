export default {
    name: "pageDetails",
    title: "PageDetails",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "role",
            title: "Role",
            type: "string",
        },
        {
            name: "heroImage",
            title: "HeroImage",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "backgroundInfo",
            title: "BackgroundInfo",
            type: "string",
        },
        {
            name: "profileImage",
            title: "ProfileImage",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "phone",
            title: "Phone",
            type: "string",
        },
        {
            name: "address",
            title: "Address",
            type: "string",
        },
        {
            name: "socials",
            title: "Socials",
            type: "array",
            of: [{type: "reference", to: {type: "social"}}]
        },
        
    ]
}