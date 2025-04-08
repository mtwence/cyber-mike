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
            type: "string"
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
            name: "profilePic",
            title: "ProfilePic",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "phoneNumber",
            title: "PhoneNumber",
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "address",
            title: "Address",
            type: "string"
        },
        {
            name: "backgroundInformation",
            title: "BackgroundInformation",
            type: "string"
        },
        {
            name: "resume",
            title: "Resume",
            type: "file"
        }
    ]
} 